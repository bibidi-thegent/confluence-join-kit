# Joining the Confluence test server

You need a paid Minecraft: Java Edition account, the exact game version below, Fabric, two
mod jars, Tailscale, and a whitelist entry from Bibidi. Ten minutes the first time.

**Download the kit:** https://github.com/bibidi-thegent/confluence-join-kit/releases/latest
(the `confluence-<version>-mc26.2-mods.zip` file). Each server update is a new release there,
announced in Discord; when the server tells you your mod is out of date, download the newest
zip and replace the jars.

**Player Guide:** https://github.com/bibidi-thegent/confluence-join-kit/blob/main/PLAYER-GUIDE.md (every class, profession and system; its top line says when it last changed).

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
| K | Spell Book: every ability explained, swap your class with the Play button; the Mastery row under Q picks your level-20 Mastery; the last tab, Professions, shows each profession's Knack, ranks and Prime |
| M | Map (party members are marked; a skull marks where your last survival death dropped your bag) |
| I | Inventory: the Packs and Vault tabs on its top edge, the Sort button under it (click sorts the bag, never the hotbar; right-click changes the mode: Category, Block type, A-Z). A chest, barrel, shulker box, pack or vault window has Sort too (it sorts that container) and **Deposit** beside it: every bag stack whose item is already in the chest goes into it (never hotbar slot 1, your armour, the off-hand or Breach gear; off on the vault). A pack's window has the **Overflow** button, the hopper at the right end of the row under the pack's cells: switched on, what you pick up with a full bag flows into that pack |
| V | Town edit mode (mayors only) |
| (unbound) | Toggle meter: the damage meter shows by itself in a party during a Breach or Manor run; bind a key in Options > Controls > Confluence combat to show it solo or hide it |

**Survival HUD.** In survival mode (B) in the survival worlds your Core level and Discipline tag step aside, and so do
the resource bar and the Evade squares (no Evade or casts there). Hold a pickaxe, shovel, axe, hoe, rod or weapon (a sword,
a bow, a crossbow, a trident, a mace: Hunting), look at a Smithing Table, Grindstone, furnace (Smithing) or brewing stand
(Alchemy) within reach, or punch something with an empty hand (Unarmed, for 10 s), and the bar under your health shows that
profession alone: its name and level on the left, its XP on the right, filling in its colour; right of the bars its skill
beside a ring that refills as the cooldown runs: its name, and under it the seconds left, "Ready: right-click" ("Ready:
sneak + right-click" for the rod and the newer professions), "Primed" or "Active". From Hunting 20 a line under Hunting's bar
counts the hostiles near you ("4 hostiles, north-east"). Hold anything else (a block, nothing) and that bar stays empty.
Combat mode looks as before.

**Professions.** Ten professions level from 1 to 50 in the survival world, the frontier and their Nethers and Ends, and
the Quarry (never in the hub or a Breach): Mining, Excavating, Lumberjack, Farming and Fishing by gathering, Smithing
(repairs at a Smithing Table, salvage at a Grindstone, your furnaces), Alchemy (brewing in your own stands), Hunting (kills
with a weapon), Acrobatics (falls that hurt; none in the Quarry) and Unarmed (your fists). Each has a Knack that grows with
every level, ranks that open at their levels ("Rank 1 unlocked: Crop Sense") and, Acrobatics aside, its Prime (right-click
the tool; a sneaking right-click for the newer five). Press K and open the Professions tab for every number;
`/cf professions` lists the levels; the Player Guide has a post for each.
Blocks a player placed, generator stone and an over-fished spot pay nothing, so gather from the world. In a party, the
profession XP is shared with the members within 50 blocks (each gets 1.5 x the XP / the sharers); the leader turns it off
with `/cf party share off` (and on again with `/cf party share on`). Every tenth level is announced in your world's chat.
Mining, Excavating and Lumberjack have their full ranks: Ore Sense (from Mining 10: craft a Prospector's Fork from two
iron ingots side by side over a stick, hold an ore's metal in your off hand and left-click stone; three sonar waves
flash that ore through the stone, then the fork rings again after a few minutes), Breaker Charges (sneak + right-click
TNT with a pickaxe, from 20; only where TNT may go off, which is the Quarry), Unearthing (digging turns up finds the Hub
Market buys, from Excavating 5), Clear Cut, Seedfall and Lumber Yard (Burrow and Hollow Sense were removed on 2026-10-22).
The Senses have an unbound show / hide key in Controls ('Deep, Beast Sense: show / hide'; the fork's ping is never hidden).
Farming and Fishing have theirs too: Replant (a ripe crop broken with a hoe replants from your seeds, from Farming 10), the
Tables (farm foods and fish fill you more), Hedge Finds and Greenhouse; Treasure Lines (catches come up as tools, armour,
books and finds the Hub Market buys, from Fishing 5), Hooked (reel in a mob to shake a drop off it), Ice Fishing, Enchanted
Lines and Deep Sense (treasure hotspots shimmer on the water while you hold a rod, from Fishing 35; the same Senses key).

Chat commands worth knowing: `/cf kit` opens the class picker, `/cf loadout` picks your abilities
from the pools, `/cf party invite <name>` and `/cf party accept` form a party, `/cf hub` returns
to the hub, and `/cf` alone lists every command by group (`/cf help town` shows one group).
Combat mode in the wilds (the survival world, its Nether and End) needs the **Wilds Pass**: kill the Ender Dragon
(everyone at the kill gets a Dragon Egg, party members in the End too) and trade the egg to the Town Warden; until then B
keeps you in survival mode out there (the hub, the arena and the Breaches stay combat), and `/cf wilds` shows your pass.
`/cf lock` then a right-click locks a chest, door or trapdoor to you (`/cf lock add <name>` shares
it). A sign with `[lift]` on its second line is a lift: put one on each floor straight above each
other, left-click a lift sign to ride up and right-click to ride down (sneak to break the sign).
Dying in the survival world drops your bag where you died (your hotbar slot 1, worn armour,
off-hand, shulker boxes and Breach gear stay) and resets your XP levels; the map's skull shows the spot
until you walk back to it. A red skull beside your target's name means a ready key would kill it now: that key's
cap is outlined in red. Heals float as green numbers over the player they land on and your log names both sides ("You
healed Bob 570"); a heal past full leaves a small shield. When a run ends a breakdown of everyone's damage and healing
opens (Esc closes it) and goes to chat; `/cf meter` shows it again.

**The raid.** Threshold Manor is entered at the **Raid Gate**: walk out along the plaza's east arm to the
terrace and step through the dark oak gate (its floating name reads "Raid Gate", "Threshold Manor"); its menu lists the two manor
tiers (the Breach Vendor still sells every tier). The Rehearsal is free and takes anyone, alone or in a party,
to learn the fights; the Soiree is the raid proper (a party of two or more, Core Level 15 and a Warden's Breach
clear). Soiree loot is locked out per boss room each week: once you have been there for a boss room's clear,
you can still help friends through it (kill XP and tokens as usual) but its chest, Shards, relic and clear bonus
wait for Monday's reset. `/cf raid lockouts` shows yours. If your connection drops during a run you have 5
minutes to log back in: you come back in the same room with your loot and stats, not in the hub.

**The Quarry.** A Peaceful world for digging in bulk through the sandstone Quarry Gate beside the Raid Gate's terrace,
north of the plaza's east arm: one Quarry Ticket (Breach and Manor chests, Excavating, or ¥400 at the Town Warden) buys an hour, nothing hurts
you there, TNT works, and it is wiped every Sunday at 04:00 back to the same map (`/cf quarry` shows your tickets and
time). You arrive on the Quarry hub, a sky platform with fourteen portals: pick the biome you came to dig (Desert,
Badlands, Forest, Taiga, Jungle, Swamp, Mountains, Ocean, Savanna, Snowy, Cherry, Dark Forest, Mushroom, Lush Caves) and
the frame on its pad brings you back.

**The hub gates.** By the World Gate: the Nether Gate (one Ghast Tear to the Town Warden) and the End Gate
(Wilds Pass holders and their party), `/cf gates`.

**Echoes.** Once a day step onto the Calendar's amethyst sill east of the plaza for an Echo; the Chronicler beside the
Calendar trades them for prizes, and Sunday at 20:00 a raffle draws from the week's Echoes (`/cf echoes`).

**Deeds.** Achievements in the Confluence Deeds tab of the Advancements screen (L), with toasts, Deed Points on the hub's
board and three titles to earn (`/cf deeds`).

**Packs.** A shulker box equipped as a pack takes the overflow of a full bag once you switch it on: the Overflow button (the
hopper at the right end of the row under the pack's cells) or `/cf pack overflow <1|2|3> on|off`; `/cf pack` lists your packs and their switch. A
stack of the same item in a pack fills first, then that pack's empty cells, then the other packs in order; shulker boxes
and Breach gear never flow, and packs are put away in the Breaches.

**Hub signs.** Floating names hang just under each gate's arch, saying what its sign used to say (the World, Quarry,
Nether, End and Raid gates have no signs now), over the Records (a sunken records catalog under it, its lectern's book
listing every board's top ten), and over the bridges to the Market, the Breaches, the Town Portals, the Arena and Combat
Training where they leave the central island. The dais's key cards and the Calendar's sign still stand.

## If it does not work

- **"Data mismatch" or vanilla hotbar after joining**: your Confluence jar is older or newer
  than the server's. Replace it with the one from the latest kit and restart the game.
- **Cannot connect / timed out**: check Tailscale is connected on both ends and that you accepted
  the share; ask Bibidi whether the server is up.
- **"You are not white-listed"**: Bibidi has not added your name yet.
- **Wrong Minecraft version** in the launcher: the server is pinned to 26.2; the launcher's
  "latest release" is newer and will not connect.
