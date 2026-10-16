// Posts a summary of a GitHub push to a Discord channel through a webhook.
// Runs inside GitHub Actions and reads the push payload from GITHUB_EVENT_PATH.
// No dependencies: needs Node 18+ (built-in fetch).
//
// Environment:
//   DISCORD_WEBHOOK_URL  required (unless DRY_RUN=1) - the channel webhook URL
//   PLUGIN_ROOT          optional - groups changed files by plugin:
//                          ""         no grouping (default)
//                          "."        group by top-level folder
//                          "plugins"  group by the folder under plugins/
//   DISCORD_USERNAME     optional - name the posts appear under
//   DISCORD_AVATAR_URL   optional - avatar image for the posts
//   DRY_RUN=1            print the Discord payloads instead of sending them

const fs = require('fs');

const WEBHOOK = process.env.DISCORD_WEBHOOK_URL;
const PLUGIN_ROOT = (process.env.PLUGIN_ROOT || '').replace(/^\/+|\/+$/g, '');
const USERNAME = process.env.DISCORD_USERNAME || 'Plugin Updates';
const AVATAR_URL = process.env.DISCORD_AVATAR_URL || undefined;
const DRY_RUN = process.env.DRY_RUN === '1';

// Discord limits: 10 embeds and 6000 embed characters per message,
// 4096 per description, 256 per title.
const MAX_EMBEDS = 10;
const MAX_MESSAGE_CHARS = 5800;
const MAX_DESCRIPTION = 4000;

const ICONS = { added: '🟢', modified: '🟡', removed: '🔴' };
const COLORS = { added: 0x2ecc71, modified: 0xf1c40f, removed: 0xe74c3c, mixed: 0x5865f2 };

const truncate = (s, n) => (s.length > n ? s.slice(0, n - 1) + '…' : s);
const escapeMd = (s) => s.replace(/([\\_*~`|[\]])/g, '\\$1');
const encodePath = (p) => p.split('/').map(encodeURIComponent).join('/');

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

  // Build the file list, grouped by plugin when PLUGIN_ROOT is set.
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
      // Removed files no longer exist at this commit, so they get no link.
      fileLines.push(
        f.type === 'removed'
          ? `${ICONS.removed} ~~${label}~~`
          : `${ICONS[f.type]} [${label}](${repoUrl}/blob/${commit.id}/${encodePath(f.path)})`
      );
    }
  }

  let description = body ? truncate(body, 600) + '\n\n' : '';
  let shownCount = 0;
  for (const line of fileLines) {
    const overflowNote = `\n…and more — [view full commit](${commit.url})`;
    if (description.length + line.length + 1 + overflowNote.length > MAX_DESCRIPTION) {
      description += overflowNote.trimStart();
      break;
    }
    description += line + '\n';
    shownCount++;
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
      name: truncate((user || (commit.author && commit.author.name) || 'unknown'), 256),
      url: user ? `https://github.com/${user}` : undefined,
      icon_url: user ? `https://github.com/${user}.png` : undefined,
    },
    footer: { text: `${repoName} • ${branch} • ${commit.id.slice(0, 7)} • ${files.length} file(s)` },
    timestamp: commit.timestamp,
  };
}

const embedSize = (e) => e.title.length + e.description.length + e.footer.text.length + e.author.name.length;

async function send(payload) {
  if (DRY_RUN) {
    console.log(JSON.stringify(payload, null, 2));
    return;
  }
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(`${WEBHOOK}?wait=true`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.status === 429) {
      const { retry_after = 1 } = await res.json().catch(() => ({}));
      await new Promise((r) => setTimeout(r, retry_after * 1000 + 250));
      continue;
    }
    if (!res.ok) throw new Error(`Discord returned ${res.status}: ${await res.text()}`);
    return;
  }
  throw new Error('Discord kept rate-limiting the webhook; giving up.');
}

async function main() {
  if (!WEBHOOK && !DRY_RUN) throw new Error('DISCORD_WEBHOOK_URL is not set. Add it as a repository secret.');
  const event = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'));
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

  // Pack embeds into as few messages as Discord's limits allow.
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

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
