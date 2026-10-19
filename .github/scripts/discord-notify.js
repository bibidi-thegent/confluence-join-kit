// Posts GitHub activity to a Discord channel through a webhook. Runs inside GitHub Actions and
// reads the event payload from GITHUB_EVENT_PATH. No dependencies: needs Node 18+ (fetch).
//
// Events:
//   release (published)  one embed: the release name, its install notes, every asset as a download
//                        link with its size, and the repo's "latest release" link. This is the one
//                        players need: a new kit means a new jar to install. When the release notes
//                        carry a "## Update summary" section and DISCORD_BOT_TOKEN is set, a thread
//                        is opened on that announcement and the summary is posted in it, split into
//                        Discord-sized messages (the change summary that used to be pasted by hand).
//   workflow_dispatch    re-posts the repo's latest release (fetched with GITHUB_TOKEN), thread
//                        included. Use the "Run workflow" button to test the webhook and the bot.
//   push                 one embed per commit with its changed files (the old commit feed).
//
// Environment:
//   DISCORD_WEBHOOK_URL  required (unless DRY_RUN=1) - the channel webhook URL
//   DISCORD_BOT_TOKEN    optional - a bot in the server with View Channels, Send Messages, Create
//                        Public Threads, Send Messages in Threads and Read Message History in the
//                        webhook's channel; without it the summary thread is skipped with a log line
//   GITHUB_TOKEN         needed by workflow_dispatch to read the latest release
//   DISCORD_USERNAME     optional - name the posts appear under
//   DISCORD_AVATAR_URL   optional - avatar image for the posts
//   DISCORD_MENTION      optional - "<@&ROLE_ID>", "@here" or "@everyone" prepended to release posts
//   PLUGIN_ROOT          optional - push feed grouping: "" flat, "." top-level folder, "plugins"
//   DRY_RUN=1            print the Discord payloads instead of sending them

const fs = require('fs');

const WEBHOOK = process.env.DISCORD_WEBHOOK_URL;
const BOT_TOKEN = (process.env.DISCORD_BOT_TOKEN || '').trim();
const TOKEN = process.env.GITHUB_TOKEN;
const PLUGIN_ROOT = (process.env.PLUGIN_ROOT || '').replace(/^\/+|\/+$/g, '');
const USERNAME = process.env.DISCORD_USERNAME || 'Updates';
const AVATAR_URL = process.env.DISCORD_AVATAR_URL || undefined;
const MENTION = (process.env.DISCORD_MENTION || '').trim();
const DRY_RUN = process.env.DRY_RUN === '1';
const API = 'https://discord.com/api/v10';

// Discord limits: 10 embeds and 6000 embed characters per message, 4096 per description,
// 256 per title, 25 fields of 1024 characters, 2000 characters per plain message, 100 per thread name.
const MAX_EMBEDS = 10;
const MAX_MESSAGE_CHARS = 5800;
const MAX_DESCRIPTION = 4000;
const MAX_FIELD = 1000;
const MAX_CONTENT = 1900;
const SUMMARY_HEADING = /^##\s+Update summary\s*$/m;

const ICONS = { added: '🟢', modified: '🟡', removed: '🔴' };
const COLORS = { added: 0x2ecc71, modified: 0xf1c40f, removed: 0xe74c3c, mixed: 0x5865f2, release: 0x9b59b6 };

const truncate = (s, n) => (s.length > n ? s.slice(0, n - 1) + '…' : s);
const escapeMd = (s) => s.replace(/([\\_*~`|[\]])/g, '\\$1');
const encodePath = (p) => p.split('/').map(encodeURIComponent).join('/');
const humanSize = (n) => (n >= 1 << 20 ? `${(n / (1 << 20)).toFixed(1)} MB` : n >= 1024 ? `${Math.round(n / 1024)} KB` : `${n} B`);

// ---- releases -------------------------------------------------------------------------------

// The release notes are the install lines plus, optionally, "## Update summary" and the summary.
// The embed shows the install lines; the summary goes to the thread.
function splitNotes(body) {
  const text = (body || '').replace(/\r\n/g, '\n').trim();
  const m = SUMMARY_HEADING.exec(text);
  if (!m) return { install: text, summary: '' };
  return { install: text.slice(0, m.index).trim(), summary: text.slice(m.index + m[0].length).trim() };
}

function releaseEmbed(release, repo) {
  const assets = release.assets || [];
  const lines = assets.map((a) => `⬇️ [${escapeMd(a.name)}](${a.browser_download_url}) (${humanSize(a.size || 0)})`);
  const { install, summary } = splitNotes(release.body);
  const description = [
    install ? truncate(install, 1500) : '',
    '',
    summary ? '_What changed: see the thread below._' : '',
    `**Latest release:** <${repo.html_url}/releases/latest>`,
  ].filter((l, i, arr) => l !== '' || (i > 0 && arr[i - 1] !== '')).join('\n').trim();
  const fields = [];
  if (lines.length) {
    // Keep each field under Discord's limit; a kit has two or three assets, so one field.
    let chunk = '';
    for (const line of lines) {
      if (chunk.length + line.length + 1 > MAX_FIELD) {
        fields.push({ name: fields.length ? 'More downloads' : 'Downloads', value: chunk.trim() });
        chunk = '';
      }
      chunk += line + '\n';
    }
    fields.push({ name: fields.length ? 'More downloads' : 'Downloads', value: chunk.trim() });
  } else {
    fields.push({ name: 'Downloads', value: '_No files attached to this release._' });
  }
  const author = release.author || {};
  return {
    title: truncate(release.name || release.tag_name || 'New release', 256),
    url: release.html_url,
    description: truncate(description, MAX_DESCRIPTION),
    color: release.prerelease ? COLORS.modified : COLORS.release,
    fields,
    author: {
      name: truncate(author.login || 'unknown', 256),
      url: author.login ? `https://github.com/${author.login}` : undefined,
      icon_url: author.login ? `https://github.com/${author.login}.png` : undefined,
    },
    footer: { text: `${repo.name} • ${release.tag_name} • ${assets.length} file(s)` },
    timestamp: release.published_at || release.created_at,
  };
}

async function latestRelease(repo) {
  if (!TOKEN) throw new Error('GITHUB_TOKEN is needed to fetch the latest release for a manual run.');
  const res = await fetch(`https://api.github.com/repos/${repo.full_name}/releases/latest`, {
    headers: { Authorization: `Bearer ${TOKEN}`, Accept: 'application/vnd.github+json', 'User-Agent': 'discord-notify' },
  });
  if (!res.ok) throw new Error(`GitHub returned ${res.status} for the latest release: ${await res.text()}`);
  return res.json();
}

// Splits markdown into Discord messages: on blank lines first, then on single lines, never inside
// a fenced code block when it can be helped, each piece under MAX_CONTENT characters.
function chunkMarkdown(text) {
  const paragraphs = text.replace(/\r\n/g, '\n').split(/\n{2,}/);
  const chunks = [];
  let current = '';
  const push = () => { if (current.trim()) chunks.push(current.trim()); current = ''; };
  for (const para of paragraphs) {
    const pieces = para.length > MAX_CONTENT ? splitLines(para) : [para];
    for (const piece of pieces) {
      if (current && current.length + piece.length + 2 > MAX_CONTENT) push();
      current += (current ? '\n\n' : '') + piece;
    }
  }
  push();
  return chunks;
}

function splitLines(para) {
  const out = [];
  let current = '';
  for (const line of para.split('\n')) {
    const l = line.length > MAX_CONTENT ? truncate(line, MAX_CONTENT) : line;
    if (current && current.length + l.length + 1 > MAX_CONTENT) { out.push(current); current = ''; }
    current += (current ? '\n' : '') + l;
  }
  if (current) out.push(current);
  return out;
}

// ---- pushes ---------------------------------------------------------------------------------

// Returns [group, pathShownInsideThatGroup]; group is null when not grouping.
function splitGroup(path) {
  if (!PLUGIN_ROOT) return [null, path];
  const rel = PLUGIN_ROOT === '.' ? path : path.startsWith(PLUGIN_ROOT + '/') ? path.slice(PLUGIN_ROOT.length + 1) : null;
  if (rel === null || !rel.includes('/')) return ['Other', path];
  const [group, ...rest] = rel.split('/');
  return [group, rest.join('/')];
}

function commitEmbed(commit, repoUrl, repoName, branch) {
  const files = [
    ...(commit.added || []).map((path) => ({ path, type: 'added' })),
    ...(commit.modified || []).map((path) => ({ path, type: 'modified' })),
    ...(commit.removed || []).map((path) => ({ path, type: 'removed' })),
  ];
  const [title, ...rest] = commit.message.split('\n');
  const body = rest.join('\n').trim();

  const groups = new Map();
  for (const file of files) {
    const [group, shown] = splitGroup(file.path);
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push({ ...file, shown });
  }
  const fileLines = [];
  for (const [group, list] of [...groups].sort(([a], [b]) => String(a).localeCompare(String(b)))) {
    if (group !== null) fileLines.push(`**📦 ${escapeMd(group)}**`);
    for (const f of list) {
      const label = escapeMd(f.shown);
      fileLines.push(
        f.type === 'removed'
          ? `${ICONS.removed} ~~${label}~~`
          : `${ICONS[f.type]} [${label}](${repoUrl}/blob/${commit.id}/${encodePath(f.path)})`
      );
    }
  }

  let description = body ? truncate(body, 600) + '\n\n' : '';
  for (const line of fileLines) {
    const overflowNote = `\n…and more — [view full commit](${commit.url})`;
    if (description.length + line.length + 1 + overflowNote.length > MAX_DESCRIPTION) {
      description += overflowNote.trimStart();
      break;
    }
    description += line + '\n';
  }
  if (!files.length) description += '_No file changes listed._';

  const types = new Set(files.map((f) => f.type));
  const color = types.size === 1 ? COLORS[[...types][0]] : COLORS.mixed;
  const user = commit.author && commit.author.username;
  return {
    title: truncate(title || '(no message)', 256),
    url: commit.url,
    description: description.trim(),
    color,
    author: {
      name: truncate(user || (commit.author && commit.author.name) || 'unknown', 256),
      url: user ? `https://github.com/${user}` : undefined,
      icon_url: user ? `https://github.com/${user}.png` : undefined,
    },
    footer: { text: `${repoName} • ${branch} • ${commit.id.slice(0, 7)} • ${files.length} file(s)` },
    timestamp: commit.timestamp,
  };
}

const embedSize = (e) =>
  e.title.length + e.description.length + e.footer.text.length + e.author.name.length +
  (e.fields || []).reduce((n, f) => n + f.name.length + f.value.length, 0);

// ---- sending --------------------------------------------------------------------------------

function allowedMentions() {
  const m = { parse: [] };
  if (/^<@&\d+>$/.test(MENTION)) m.roles = [MENTION.slice(3, -1)];
  else if (MENTION === '@here' || MENTION === '@everyone') m.parse = ['everyone'];
  return m;
}

// One Discord call with the 429 back-off; returns the parsed JSON (webhook calls use ?wait=true
// so the created message comes back with its id and channel_id).
async function discord(url, payload, headers) {
  if (DRY_RUN) {
    console.log(`DRY RUN ${url.replace(/\/webhooks\/[^?]+/, '/webhooks/…')}`);
    console.log(JSON.stringify(payload, null, 2));
    return { id: 'dry-message', channel_id: 'dry-channel' };
  }
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(payload),
    });
    if (res.status === 429) {
      const { retry_after = 1 } = await res.json().catch(() => ({}));
      await new Promise((r) => setTimeout(r, retry_after * 1000 + 250));
      continue;
    }
    if (!res.ok) throw new Error(`Discord returned ${res.status}: ${await res.text()}`);
    return res.status === 204 ? {} : res.json();
  }
  throw new Error('Discord kept rate-limiting; giving up.');
}

const send = (payload) => discord(`${WEBHOOK}?wait=true`, payload);
const bot = (path, payload) => discord(`${API}${path}`, payload, { Authorization: `Bot ${BOT_TOKEN}` });

// Opens a thread on the announcement and posts the summary in it, one message per chunk.
async function postSummaryThread(message, release, summary) {
  if (!BOT_TOKEN) {
    console.log('No DISCORD_BOT_TOKEN: the update summary was not posted (it is in the release notes).');
    return;
  }
  const name = truncate(`Update ${release.name || release.tag_name}`, 100);
  const thread = await bot(`/channels/${message.channel_id}/messages/${message.id}/threads`, {
    name,
    auto_archive_duration: 10080,
  });
  const chunks = chunkMarkdown(summary);
  for (const content of chunks) {
    await bot(`/channels/${thread.id}/messages`, { content, allowed_mentions: { parse: [] } });
  }
  console.log(`Opened thread "${name}" and posted the summary in ${chunks.length} message(s).`);
}

async function postRelease(release, repo) {
  const header = `${MENTION ? MENTION + ' ' : ''}📦 **New ${escapeMd(repo.name)} release:** ${escapeMd(release.name || release.tag_name)}. Replace your Confluence jar before joining.`;
  const message = await send({
    username: USERNAME,
    avatar_url: AVATAR_URL,
    content: header,
    embeds: [releaseEmbed(release, repo)],
    allowed_mentions: allowedMentions(),
  });
  console.log(`Posted release ${release.tag_name}.`);
  const { summary } = splitNotes(release.body);
  if (!summary) {
    console.log('The release notes have no "## Update summary" section; no thread.');
    return;
  }
  try {
    await postSummaryThread(message, release, summary);
  } catch (err) {
    // The announcement is out; a thread failure must not fail the run twice over.
    console.error(`The summary thread failed: ${err.message}`);
    process.exitCode = 1;
  }
}

async function postPush(event) {
  const commits = event.commits || [];
  if (event.deleted || !commits.length) {
    console.log('No commits in this push; nothing to post.');
    return;
  }
  const repo = event.repository;
  const repoUrl = repo.html_url;
  const branch = event.ref.replace(/^refs\/heads\//, '');
  const pusher = (event.pusher && event.pusher.name) || (event.sender && event.sender.login) || 'someone';
  const embeds = commits
    .filter((c) => !/\[(skip discord|discord skip)\]/i.test(c.message))
    .map((c) => commitEmbed(c, repoUrl, repo.name, branch));
  if (!embeds.length) {
    console.log('All commits were marked [skip discord].');
    return;
  }
  const plural = embeds.length === 1 ? 'commit' : 'commits';
  const compare = event.compare ? ` — [compare changes](<${event.compare}>)` : '';
  const header = `**${escapeMd(pusher)}** pushed ${embeds.length} ${plural} to \`${branch}\` on [${escapeMd(repo.full_name)}](<${repoUrl}>)${compare}`;

  const messages = [];
  let current = [];
  let size = 0;
  for (const e of embeds) {
    const s = embedSize(e);
    if (current.length && (current.length === MAX_EMBEDS || size + s > MAX_MESSAGE_CHARS)) {
      messages.push(current);
      current = [];
      size = 0;
    }
    current.push(e);
    size += s;
  }
  messages.push(current);
  for (let i = 0; i < messages.length; i++) {
    await send({
      username: USERNAME,
      avatar_url: AVATAR_URL,
      content: i === 0 ? header : undefined,
      embeds: messages[i],
      allowed_mentions: { parse: [] },
    });
  }
  console.log(`Posted ${embeds.length} ${plural} in ${messages.length} message(s).`);
}

async function main() {
  if (!WEBHOOK && !DRY_RUN) throw new Error('DISCORD_WEBHOOK_URL is not set. Add it as a repository secret.');
  const event = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'));
  const eventName = process.env.GITHUB_EVENT_NAME || (event.release ? 'release' : event.commits ? 'push' : 'workflow_dispatch');
  const repo = event.repository;

  if (eventName === 'release') {
    if (event.action && event.action !== 'published') {
      console.log(`Release ${event.action}; only published releases are posted.`);
      return;
    }
    await postRelease(event.release, repo);
  } else if (eventName === 'workflow_dispatch') {
    await postRelease(await latestRelease(repo), repo);
  } else if (eventName === 'push') {
    await postPush(event);
  } else {
    console.log(`Nothing to post for a ${eventName} event.`);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
