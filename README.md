# Joining the Confluence test server

You need a paid Minecraft: Java Edition account, the exact game version below, Fabric, two
mod jars, Tailscale, and a whitelist entry from Bibidi. Ten minutes the first time.

**Download the kit:** https://github.com/bibidi-thegent/confluence-join-kit/releases/latest
(the `confluence-<version>-mc26.2-mods.zip` file). Each server update is a new release there,
announced in Discord; when the server tells you your mod is out of date, download the newest
zip and replace the jars.

| What | Value |
| --- | --- |
| Minecraft | 26.2 (exactly; not 26.3) |
| Mod loader | Fabric Loader 0.19.5 |
| Mods | `fabric-api-0.161.0+26.2.jar` and `confluence-mod-0.1.0.jar` (both in the kit zip) |
| Network | Tailscale (free), connected to Bibidi's shared machine |
| Server address | Bibidi's Tailscale IP, port 25565 (he sends it to you) |

The Confluence mod must match the server byte for byte. When Bibidi ships a new kit, replace
your jar before joining; an old jar is refused at the handshake and you will see vanilla
Minecraft with none of the abilities.

## 1. Install the game files

1. Install Fabric once: run the installer from fabricmc.net, pick game version **26.2** and
   loader **0.19.5**, Client, Install. It adds a profile named `fabric-loader-0.19.5-26.2` to
   the official launcher.
2. Unzip the kit. Open `%APPDATA%\.minecraft\mods` (paste that into the Explorer address bar;
   make the folder if it is missing) and copy both jars from the zip's `mods` folder into it.
   On an update, replace the old `confluence-mod-*.jar` with the new one; Fabric API only
   changes when the game version does.
3. In the official launcher, select the `fabric-loader-0.19.5-26.2` profile and play.

The first launch should show in the log: `Loading Minecraft 26.2 with Fabric Loader 0.19.5`
and a line `Confluence client ready`.

## 2. Install Tailscale and accept the share

1. Install Tailscale from tailscale.com and sign in (a free personal account; any Google,
   Microsoft, GitHub or Apple login works).
2. Open the share link Bibidi sends you and accept it. His PC then appears in your Tailscale
   machine list with an address like `100.x.y.z`.
3. Keep Tailscale running while you play. It only carries traffic to his PC.

## 3. Join

1. Tell Bibidi your exact Minecraft name so he can whitelist you.
2. Start the Fabric profile, Multiplayer, Add Server, address `100.x.y.z` (the address from
   step 2; the default port is fine), Join.
3. You should land in the hub with the Confluence HUD: a nine-slot ability bar, your health and
   resource, and a level tag. If you see the vanilla hotbar instead, your mod jar does not match
   the server: get the latest kit.

## Controls you need on day one

| Key | What |
| --- | --- |
| 1 2 3 4 | Core abilities |
| Q | Talent: lights gold with a chime when its trigger is met (opens at Discipline level 10) |
| E R | Utility abilities |
| F | Signature |
| G | Defensive |
| Tab | Cycle target (closest to the crosshair first) |
| Shift | Evade (dodge roll); C crouches in combat mode |
| B | Switch between combat mode and survival mode |
| K | Spell Book: every ability explained, swap your class with the Play button; the Mastery row under Q picks your level-20 Mastery |
| M | Map (party members are marked; a skull marks where your last survival death dropped your bag) |
| I | Inventory: the Packs and Vault tabs on its top edge, the Sort button under it (click sorts the bag, never the hotbar; right-click changes the mode: Category, Block type, A-Z) |
| V | Town edit mode (mayors only) |
| (unbound) | Toggle meter: the damage meter shows by itself in a party during a Breach or Manor run; bind a key in Options > Controls > Confluence combat to show it solo or hide it |

Chat commands worth knowing: `/cf kit` opens the class picker, `/cf loadout` picks your abilities
from the pools, `/cf party invite <name>` and `/cf party accept` form a party, `/cf hub` returns
to the hub, and `/cf` alone lists every command by group (`/cf help town` shows one group).
`/cf lock` then a right-click locks a chest, door or trapdoor to you (`/cf lock add <name>` shares
it). A sign with `[lift]` on its second line is a lift: put one on each floor straight above each
other, left-click a lift sign to ride up and right-click to ride down (sneak to break the sign).
Dying in the survival world drops your bag where you died (your hotbar slot 1, worn armour,
off-hand, shulker boxes and Breach gear stay) and resets your XP levels; the map's skull shows the spot
until you walk back to it. A red skull beside your target's name means a ready key would kill it now: that key's
cap is outlined in red. Heals float as green numbers over the player they land on and your log names both sides ("You
healed Bob 570"); a heal past full leaves a small shield. When a run ends a breakdown of everyone's damage and healing
opens (Esc closes it) and goes to chat; `/cf meter` shows it again.

## If it does not work

- **"Data mismatch" or vanilla hotbar after joining**: your Confluence jar is older or newer
  than the server's. Replace it with the one from the latest kit and restart the game.
- **Cannot connect / timed out**: check Tailscale is connected on both ends and that you accepted
  the share; ask Bibidi whether the server is up.
- **"You are not white-listed"**: Bibidi has not added your name yet.
- **Wrong Minecraft version** in the launcher: the server is pinned to 26.2; the launcher's
  "latest release" is newer and will not connect.
