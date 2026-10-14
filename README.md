# Joining the Confluence test server

You need a paid Minecraft: Java Edition account, the exact game version below, Fabric, two
mod jars, Tailscale, and a whitelist entry from Bibidi. Ten minutes the first time.

**Download the kit:** https://github.com/bibidi-thegent/confluence-join-kit/releases/latest
(the `.mrpack` for the Modrinth App or Prism, or the `-mods.zip` for a manual install). Each
server update is a new release there; when the server tells you your mod is out of date, grab
the newest one and replace the jar.

| What | Value |
| --- | --- |
| Minecraft | 26.2 (exactly; not 26.3) |
| Mod loader | Fabric Loader 0.19.5 |
| Mods | `fabric-api-0.161.0+26.2.jar` and `confluence-mod-0.1.0.jar` (both in the kit) |
| Network | Tailscale (free), connected to Bibidi's shared machine |
| Server address | Bibidi's Tailscale IP, port 25565 (he sends it to you) |

The Confluence mod must match the server byte for byte. When Bibidi ships a new kit, replace
your jar before joining; an old jar is refused at the handshake and you will see vanilla
Minecraft with none of the abilities.

## 1. Install the game files

**Easiest: the Modrinth App or Prism Launcher.** Install either launcher, then import the
`confluence-<version>-mc26.2.mrpack` file from the kit (Modrinth App: Library, the plus button,
"From file"; Prism: Add Instance, Import). It creates an instance with Minecraft 26.2, Fabric
0.19.5 and both mods. Sign in with your Microsoft account inside the launcher.

**Manual, with the official launcher.** Run the Fabric installer from fabricmc.net, pick game
version 26.2 and loader 0.19.5, and install the client. Open `%APPDATA%\.minecraft\mods` (make
the folder if it is missing) and copy both jars from the kit's `mods` folder into it. In the
official launcher, play the profile named `fabric-loader-0.19.5-26.2`.

Either way, the first launch should show in the log: `Loading Minecraft 26.2 with Fabric Loader
0.19.5` and a line `Confluence client ready`.

## 2. Install Tailscale and accept the share

1. Install Tailscale from tailscale.com and sign in (a free personal account; any Google,
   Microsoft, GitHub or Apple login works).
2. Open the share link Bibidi sends you and accept it. His PC then appears in your Tailscale
   machine list with an address like `100.x.y.z`.
3. Keep Tailscale running while you play. It only carries traffic to his PC.

## 3. Join

1. Tell Bibidi your exact Minecraft name so he can whitelist you.
2. Start the Fabric instance, Multiplayer, Add Server, address `100.x.y.z` (the address from
   step 2; the default port is fine), Join.
3. You should land in the hub with the Confluence HUD: a nine-slot ability bar, your health and
   resource, and a level tag. If you see the vanilla hotbar instead, your mod jar does not match
   the server: get the latest kit.

## Controls you need on day one

| Key | What |
| --- | --- |
| 1 2 3 4 | Core abilities |
| Q E | Utility abilities |
| R | Talent |
| F | Signature |
| G | Defensive |
| Tab | Cycle target (closest to the crosshair first) |
| Shift | Evade (dodge roll); C crouches in combat mode |
| B | Switch between combat mode and survival mode |
| K | Spell Book: every ability explained, swap your class with the Play button |
| M | Map (party members are marked) |
| I | Inventory |
| V | Town edit mode (mayors only) |

Chat commands worth knowing: `/cf kit` opens the class picker, `/cf loadout` picks your abilities
from the pools, `/cf party invite <name>` and `/cf party accept` form a party, `/cf hub` returns
to the hub.

## If it does not work

- **"Data mismatch" or vanilla hotbar after joining**: your Confluence jar is older or newer
  than the server's. Replace it with the one from the latest kit and restart the game.
- **Cannot connect / timed out**: check Tailscale is connected on both ends and that you accepted
  the share; ask Bibidi whether the server is up.
- **"You are not white-listed"**: Bibidi has not added your name yet.
- **Wrong Minecraft version** in the launcher: the server is pinned to 26.2; the launcher's
  "latest release" is newer and will not connect.
