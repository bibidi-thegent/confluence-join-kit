_Last updated 2026-10-21: Five new professions, Smithing, Alchemy, Hunting, Acrobatics, Unarmed_

<!-- Generated from the data (data/*.json, gear.json, readers.json, progression.json) on 2026-10-18; refreshed on 2026-10-19 for the Talents release (every Q line is the Discipline's path A button and what lights it, the Mastery lines) and feedback round 2, and again on 2026-10-19 for the healing release (the fights post: pressure, boss auras, damage over time, threat and taunts, heal numbers, the overflow barrier, the meter; the Conduit, Cantor and Weaver passes on their Standard presets; the Dirge and Blight on the shared Song, Seeds and motes; the guardians' taunts and threat), and again on 2026-10-19 for the Rampart pass (the Rampart READY with Heat, its shell, the walls and Sunder Beam; the Bombard READY on the same Warcaster engine, Standoff to come; six provisional Talents; 10/16 READY; data hash cc6bab08), and again on 2026-10-19 for the Bombard pass (the Bombard fully playable: Standoff, its Options and its Trial, the Bombard's Range; data hash unchanged), and again on 2026-10-19 for the Warcaster and Raid Round 3 release (the fights post's Hostess's music and Wall Slam taunt; the Rampart's Backlash line per TALENTS.md section 4 and Wall Slam real on the Wallwright path; the Bombard's Redline Round dark through an Overheat with Hot and Standoff on its press, and Shockline on the Siegebreaker path; the Manor line in the closing post: the Hostess in the ballroom, waves, the Soiree's weekly loot lockouts and /cf raid lockouts, Shards per boss room, the Raid Gate, the rejoin within 5 minutes; six provisional Talents; 10/16 READY; data hash cc6bab08), and again on 2026-10-20 for the professions release (a Professions section after the closing post: the rules post (cap 50 and the curve, XP in every survival world, the Knack, ranks, Sense and Prime, placed blocks and generators paying nothing, over-fishing, the party XP share and /cf party share, the Spell Book's Professions tab, the survival HUD block, milestones, the Senses key) and one post per profession (Mining, Excavating, Lumberjack, Farming, Fishing: the tool, the XP table, the Knack, each rank with its levels, the Sense, the Prime's bands and top rank, the finds at about 0.8 x their Finds-counter base price); the professions are content (the plugin's confluence-content professions.json, finds.json and market.json), not hashed data: 10/16 READY; data hash cc6bab08 unchanged), and again on 2026-10-20 for the TNT ban (Breaker Charges only where TNT may go off), and again on 2026-10-20 for the Quarry (its own post after the rules post: the gate, the tickets and their four sources, zero damage, hunger held full, TNT, the weekly reset; the rules post's Where, Mining's Breaker Charges and Excavating's Unearthing and Finds name it), and again on 2026-10-21 for the hub gates (a Hub gates post after the Quarry's: the Nether Gate for a Ghast Tear at the Town Warden and its landing room, the End Gate for Wilds Pass holders and their party, /cf gates), and again on 2026-10-21 for feedback round 4 (the Around-the-world post split from the default-kit paragraph to make room: /home from the hub and the Quarry, the towns' trample and crops settings; Crop Sense leaves cocoa unframed), and again on 2026-10-21 for the Quarry hub (a Quarry hub post after the Quarry's: the sky platform and its fourteen biome portals, the pads, a dark portal; the Quarry post's reset line: the same map after every reset), and again on 2026-10-21 for the Echoes (an Echoes post after the hub gates': the daily Echo at the hub's Calendar, streaks and their bonus days and titles, the Chronicler's prizes, the Sunday raffle, /cf echoes), and again on 2026-10-21 for the Deeds (a Deeds post after the Echoes': the Confluence tab of the Advancements screen and its toasts, the 24 and the secret three, Deed Points and the board, the three titles now earned only, what counts from before, /cf deeds), and again on 2026-10-21 for the Ore Sense ping (the Mining post's Ore Sense line: the Prospector's Fork, its recipe, the off-hand metals, the strike blocks, the three waves, the cooldown and duration by level; the rules post's Sense line), and again on 2026-10-21 for the pack overflow and the hub holograms (a Packs post after the Deeds': a pack's overflow switch, its window button and command, the order a full bag's pickups fill in, what never flows; a Hub signs line in the hub gates' post: the floating names over the hub's places), and again on 2026-10-21 for the setup post (a Where-to-find-this-guide line in the first post: the kit repo's copy, whose top line, written by tools/make-join-kit.mjs --sync-guide, says when it last changed; the Talent, Talent picker and Mastery lines moved into a Talents and Mastery post after it to keep the first post under 1,900 characters), and again on 2026-10-21 for round 2 of the professions (the rules post lists the ten and the newer five's sneaking Primes and HUD rules; one post each for Smithing, Alchemy, Hunting, Acrobatics and Unarmed after Fishing's: where the HUD names it, the XP, the Knack, each rank, the Prime; the Deeds post's 25 with Trophy Hunter; after review the Quarry post's Acrobatics exception and the Smithing, Hunting, Acrobatics and Unarmed lines). Refresh it whenever the data, the readiness report or the professions content changes. Each block between the rules is one Discord post: keep it under 1,900 characters (this comment is not posted). -->

# Confluence: classes and specs

Every character plays an **Expertise** (a class; there are 8) and one of its two **Disciplines** (a spec: Tank, Damage or Healer). Each Expertise levels on its own.
**Where to find this guide:** <https://github.com/bibidi-thegent/confluence-join-kit/blob/main/PLAYER-GUIDE.md> (its top line says when it last changed).

**Your bar:** 1 2 3 4 core abilities, E and R utilities, Q Talent, F Signature, G Defensive, left click basic attack. Builders fill your resource, spenders use it; core abilities share a 1 s global cooldown. More unlock as you level (the Signature at 10, through a Trial).
**Targeting:** Tab cycles enemies. In combat mode the mouse wheel picks your ally target in the party frames (heals go to it, else to the most injured nearby).
**Keys:** Shift rolls 6 m, briefly immune (2 charges, 8 s recharge). B toggles combat and survival mode, K opens the Spell Book, M the map. `/cf kit` picks your Discipline, `/cf loadout` your abilities, `/cf help` lists commands.
**Kill skull:** a red skull by your target's name means a ready key would kill it now; that key (or Q) is outlined red.
**Death penalty:** dying in the survival world resets your XP levels and drops your bag for 5 minutes (hotbar slot 1, armour, off-hand, shulker boxes and Breach gear stay); the map's skull marks the spot.

**READY** specs work end to end; **PREVIEW** specs say what is not in yet. **Gear:** the Outfitter sells class pieces and inscribes cantrips (small stat boosts); relics from bosses carry two.

-# s = seconds, m = metres. Numbers are base values before gear and Talent picks.

---

**Talents and Mastery**
**Talent (Q):** opens at level 10. Its ring fills as you earn it and turns gold with a chime when ready. Six are provisional, lit by a spender or builder count for now.
**Talent picker:** in the Spell Book's Q row, pick your path and one of two choices in each of three rows (out of combat; `/cf loadout` too).
**Mastery:** at level 20, pick a stat boost in the Spell Book's Mastery row (Bulwark and Stormcaller so far).

---

**Fights: pressure, threat and healing**
**Pressure:** melee enemies wear down the player they fight: a light hit every 1.5 s within 3 m, 2% of your health scaled by the tier (1.2% in Breach I, 3.2% in V). A Shield Wall facing them blocks it and a roll skips it.
**Boss auras:** from phase 2 the Warden burns everyone in its arena 3% every 2 s; the Astronomer's starlight, the Curator's fumes (inside the rotunda) and the Hostess's music 2% every 2 s. No dodging them; barriers soak them.
**Damage over time:** a hexcaster's Ring of Thorns bleeds (1.5%/s for 5 s), a skitter's Lunge poisons (1%/s for 4 s), the Curator's Falling Frames burn. Grounding, Clarion Note and Petal Step cleanse them.
None of these kill on their own, but they leave you low for the next telegraph: healers work between the big hits.
**Threat:** an enemy attacks whoever has the most threat on it, not the nearest player. Damage makes threat, five times as much for the tanks (Bastion, Mirage, Rampart); heals count half. An enemy switches only when someone passes its target by 10%. Taunts (Shield Call, Beckon, Defiance Flare, Phantom Host, Bulwark Wall, Wall Slam) pull it onto you for a few seconds. Let the tank open the pull.
**Heal numbers:** heals float green over the healed player, your log names both sides ("Bob healed you 570") and the healed player hears a soft chime. Healing past full turns a quarter of the overheal into a shield (up to 10% of health, 6 s), so an early heal is not wasted.
**Meter:** in a party during a Breach or Manor run, a live damage and healing meter (DPS, share, HPS) stands over the combat log. Bind Toggle meter (Options > Controls > Confluence combat, unbound at first) to show it solo or hide it. When a run ends, everyone's damage, healing, overheal, damage taken, deaths and top abilities open on a screen (Esc closes it) and in chat; `/cf meter` shows them again.

---

**Bulwark · Bastion** (role: Tank, 12,000 health; READY: fully playable)
**Resource:** Fortitude, 0 to 100, starts empty. Builders and your basic attack fill it on hit, each Shield Wall block adds 5; spenders use it. Drains 5 a second out of combat.
**1 Hammerfall**: 400 to everything in a 90° 4 m cone. No cooldown. +12 Fortitude.
**2 Seismic Line**: 0.6 s cast, 620 and a 40% slow for 3 s down a 12 m line. 8 s cooldown. +16.
**3 Runefall**: a 4 m circle at your cursor (20 m) lands 0.5 s later for 460. 6 s cooldown. +14.
**4 Guardian's Verdict**: costs 40. 800 to your target (4 m); heals you for 30% of it.
**E Shield Bash**: 200 and interrupts a cast (4 m). 12 s cooldown.
**R Rallying Rune**: clears slows and roots, +30% speed for 3 s. 20 s cooldown.
**Q Reprisal**: charges when a heavy or lethal telegraph that had you inside lands without hurting you (block or evade) or Aegis Dome collapses; halfway per spender. Leaps to your target (20 m) for 850.
**F Aegis Dome**: a 6 m dome at your cursor for 8 s: telegraphs deal 80% less inside (not lethal ones). Each softened hit is a charge (up to 5); it ends in an 8 m burst of 1,500 + 500 a charge (max 4,000). 90 s cooldown.
**G Shield Wall**: hold up to 2 s at half speed: blocks non-lethal hits from the front 120°, reflects 15% (up to 600 a hit). 10 s cooldown. (Its ally cover is not in yet.)
**Left click Shield Strike**: 160 split across a 90° 4 m cone. +4.
**Play it:** Runefall the pack, Seismic Line down it, Hammerfall the gaps; spend 40 on Guardian's Verdict (your self-heal). Shield Wall frontal hits, Aegis Dome before big telegraphs. Lead every pull.
**Gear:** class piece Aegis (shield, off-hand): -10% damage taken as a Bulwark. Cantrips: Sturdy (-6% damage taken, rare), Vigorous (+6% max health), Quickstep (-15% evade recharge).
**Mastery (20):** Unbreakable (-5% damage taken) or Vanguard (+5% move speed).

---

**Bulwark · Warbreaker** (role: Damage, 10,500 health; PREVIEW: Fissures and the Fault Lines bonus are not in yet)
**Resource:** Fortitude, 0 to 100, starts empty. Builders and your basic attack fill it on hit, spenders use it. Drains 5 a second out of combat.
**1 Rupture**: 0.6 s cast, 1,350 to the first enemy in a 5 m line. 6 s cooldown. +20 Fortitude. (Its Fissure is not in yet.)
**2 Hammerfall**: 400 to everything in a 90° 4 m cone. No cooldown. +12.
**3 Seismic Line**: 0.6 s cast, 620 and a 40% slow for 3 s down a 12 m line. 8 s cooldown. +16.
**4 Breaking Blow**: costs 60. 0.8 s cast, 1,150 to your target (4 m). (The Fissure bonus, 1,438, is not in yet.)
**E Bulwark Charge**: charge a target 8 to 25 m away: 400 and a 1 s knockdown on regular enemies. 15 s cooldown.
**R Stonegrip**: 300 to each enemy in a 12 m line, 4 m wide; roots regular enemies 2 s. 18 s cooldown.
**Q Breach**: charges when a heavy ability hits an enemy mid-windup; half a charge per spender. Strikes your target (8 m) for 900 (its Fissure comes later).
**F Aegis Dome**: a 6 m dome at your cursor for 8 s: telegraphs deal 80% less inside (not lethal ones); bursts on enemies when it ends. 90 s cooldown.
**G Shield Wall**: hold up to 2 s at half speed: blocks non-lethal hits from the front 120°. 10 s cooldown.
**Left click Shield Strike**: 160 split across a 90° 4 m cone. +4.
Hammerfall, Seismic Line and Shield Strike hit 30% harder as a Warbreaker.
**Play it:** Bulwark Charge in, then Rupture and Seismic Line for Fortitude, Hammerfall between. Spend 60 on Breaking Blow, best on an enemy winding up: it charges Breach.
**Gear:** class piece Aegis (shield, off-hand): -10% damage taken as a Bulwark. Cantrips: Keen (+5% damage), Hastened (-5% cooldowns, rare), Surging (+10% damage below 50% health, rare).
**Mastery (20):** Unbreakable (-5% damage taken) or Vanguard (+5% move speed).

---

**Stormcaller · Tempest** (role: Damage, 9,000 health; READY: fully playable)
**Resource:** Charge, 0 to 100, starts full. Refills 5 a second in combat (25 out of combat); builders add a little on hit, spenders use it.
**1 Arc Bolt**: 1.2 s cast, 540 and 1 Static on your target (30 m). No cooldown. +8 Charge.
**2 Tesla Coil**: a 4 m coil at your cursor (30 m) zaps 3 times over 6 s, 220 and 1 Static each, and slows enemies inside 20%. 15 s cooldown. +3 per zap.
**3 Volt Lance**: costs 25. Instant 1,050 to your target. 4 s cooldown.
**4 Thunderline**: costs 30. 1 s cast, 1,400 to everything in a 25 m line. 8 s cooldown.
**E Shock**: 200 and interrupts a cast (30 m). 12 s cooldown.
**R Kinetic Jets**: clears slows and roots, +30% speed for 3 s. 20 s cooldown.
**Q Thunderstrike**: lit while your target is Saturated (5 Static). Consumes all its Static for 300 + 250 a stack (1,550 at 5), once a second, without breaking your cast.
**F Ion Storm**: 3 s rooted channel on an 8 m circle at your cursor: 6 strikes, each 1,200 in 2.5 m and +2 Static; everything struck ends Saturated. 90 s cooldown.
**G Arc Barrier**: absorbs up to 2,700 non-lethal damage for 8 s; when it breaks, regular enemies within 6 m are stunned 1.5 s. 60 s cooldown.
**Left click Arc Zap**: 140 to your target. +3 Charge, no Static.
**Play it:** stay at range. Arc Bolt and Tesla Coil stack Static; at 5 your target is Saturated, so press Q between casts. Keep Volt Lance on cooldown and line packs up for Thunderline. Ion Storm saturates a whole pack: follow it with Thunderstrike. Arc Barrier before a hit you can't dodge.
**Gear:** class piece Storm Rod (blaze rod, weapon): 10% shorter cooldowns as a Stormcaller. Cantrips: Keen (+5% damage), Hastened (-5% cooldowns, rare), Focused (+10% resource gain).
**Mastery (20):** Conductor (+10% resource gain) or Quickened (-5% cooldowns).

---

**Stormcaller · Conduit** (role: Healer, 9,000 health; READY: fully playable)
**Resource:** Charge 0-100, starts full, refills 5/s in combat (25 out); builder heals on the hurt add a little.
**1 Arc Mend**: heals your ally target 570 (30 m). +6 Charge.
**2 Mending Gale**: 90° 15 m cone: heals the 3 most injured inside (you too) 420. 8 s cooldown. +4 per ally healed.
**3 Living Current**: costs 40. Heals your ally target 1,200, then 3 jumps (12 m) of 200 to the most injured; a jump with nobody hurt strikes the nearest enemy for half.
**4 Surge**: costs 30. Heals your ally target 2,000 plus a 10% barrier for 4 s. 45 s cooldown.
**E Faraday Cage**: ally nearest your cursor (else you): 15% barrier for 6 s. 20 s cooldown.
**R Grounding**: cleanses your ally target (bleeds, burns, poisons, slows, roots), heals 300. 15 s cooldown, off the GCD.
**Q Jumpstart**: charges when you or an ally drops below 35% (once/10 s), halfway per spender (heals too). Heals the most injured other ally 900 (else you 400), strikes your target 280 + 160 per Static (cashed).
**F Ion Storm**: 3 s rooted channel at your cursor: 6 strikes of 1,200 (2.5 m each). 90 s cooldown.
**G Arc Barrier**: absorbs 2,700 non-lethal damage for 8 s; breaking stuns regular enemies in 6 m. 60 s cooldown.
**Left click Arc Zap**: 140 to your target. +3 Charge.
**Options:** Charged Ward (2%/s for 8 s), Volt Lance, Shock, the Stormcaller pools; shared damage hits at 79%.
**Play it:** Mend fills, Gale for groups, Current for big drops, Surge for the ally about to drop; Cage heavy hits, Ground poisons.
**Trial (10):** Lifeline's Charge: heal 15,000, 3 Groundings, 2,500 caged.
**Gear:** Storm Rod (blaze rod): -10% cooldowns as a Stormcaller. Cantrips: Focused (+10% resource gain), Hastened (-5% cooldowns, rare), Vigorous (+6% max health).
**Mastery (20):** Conductor (+10% resource gain) or Quickened (-5% cooldowns).

---

**Shade · Nightblade** (role: Damage, 10,500 health; PREVIEW: Shadowstep, stealth, the from-behind bonuses, Doppelgangers and Phase Shift are not in yet)
**Resource:** Veil, 0 to 100, starts empty. Builders and your basic attack fill it on hit, spenders use it. Drains 5 a second out of combat. (Elusive charges are not in yet.)
**1 Shadowstep**: meant to step behind your target and strike. Not in yet: the press does nothing.
**2 Shadow Shank**: 395 to your target (4 m). No cooldown. +14 Veil. (Its from-behind bonus is not in yet.)
**3 Cutthroat**: costs 45. 0.5 s cast, 1,030 to your target (4 m).
**4 Umbral Volley**: 0.8 s cast, 680 to everything in a 15 m line. 8 s cooldown. +18.
**E Vanish**: 4 s of stealth. Not in yet.
**R Umbral Spike**: 200 and interrupts a cast (15 m); +15 Veil if it interrupts. 12 s cooldown.
**Q Backstab**: lit while you stand behind your target (its rear 120°, within 5 m; flanking comes with the Nightblade pass). Strikes it for 1,250; rests 6 s.
**F Doppelgangers**: clones that strike and echo your hits. Not in yet.
**G Phase Shift**: negates your next 3 non-lethal hits. Not in yet.
**Left click Umbral Jab**: 150 to your target. +3 Veil.
**Play it:** build with Shadow Shank and Umbral Volley (line the pack up), spend 45 on Cutthroat. Interrupt casts with Umbral Spike for extra Veil. Your F and G do nothing yet, so Shift is your only answer to a telegraph: keep a charge spare. Step behind your target whenever Backstab is off its rest.
**Gear:** class piece Umbral Lantern (soul lantern, off-hand): evade recharges 10% faster as a Shade. Cantrips: Keen (+5% damage), Quickstep (-15% evade recharge), Surging (+10% damage below 50% health, rare).
**Mastery (20):** none yet.

---

**Shade · Mirage** (role: Tank, 12,000 health; PREVIEW: taunts and threat work; Elusive, Phantom Lash, Doppelgangers and Phase Shift are not in yet)
**Resource:** Veil, 0 to 100, starts empty. Your basic attack and interrupts fill it, spenders use it. Drains 5 a second out of combat. (Elusive charges, your main defence, are not in yet.)
**1 Phantom Lash**: meant as your threat builder. Not in yet: the press does nothing.
**2 Phantom Host**: costs 30. 780 to everything in a 5 m circle at your cursor (15 m), all taunted 6 s. 12 s cd. (Its extra-enemy bonus is not in yet.)
**3 Afterimage**: costs 20. 680 in a 90° 4 m cone. 12 s cd. (Its heavy-hit dodge is not in yet.)
**4 Umbral Knives**: costs 25. 1,160 to the first enemy in an 8 m line. 5 s cd.
**E Beckon**: taunts your target (25 m) for 4 s: it attacks you and hits you 10% softer. 12 s cd. (Its Elusive charge is not in yet.)
**R Umbral Spike**: 200 and interrupts a cast (15 m); +15 Veil if it interrupts. 12 s cooldown.
**Q Shadow Retort** (provisional): charges on every third spender on your target until Elusive negations land. Strikes your target (5 m) for 860.
**F Doppelgangers**: not in yet.
**G Phase Shift**: not in yet.
**Left click Umbral Jab**: 150 to your target. +3 Veil.
Shared Shade damage hits at 68% as a Mirage.
**Play it:** you hold threat now (your damage counts five times) and taunt with Beckon and Phantom Host, but Elusive, your main defence, is not in: soak with your health and Shift. Build Veil with Umbral Jab and Umbral Spike interrupts; Phantom Host gathers the pack, then Umbral Knives and Afterimage. For the full tank kit, play Bastion.
**Gear:** class piece Umbral Lantern (soul lantern, off-hand): evade recharges 10% faster as a Shade. Cantrips: Sturdy (-6% damage taken, rare), Vigorous (+6% max health), Quickstep (-15% evade recharge).
**Mastery (20):** none yet.

---

**Warcaster · Rampart** (role: Tank, 12,000 health; READY: fully playable)
**Resource:** Heat 0-100, cools 8/s. Hot at 70+: +10% damage. A builder at 100 Overheats: builders locked 2 s, then 50.
**Heat Sink:** spent Heat fills your shell (44 each, max 4,200), which soaks 25% of hits (heavy: 70%); allies in 6 m get 11 a Heat.
**1 Gauntlet Volley**: 865 to your target, 433 to others in a 60° 12 m cone, 3x threat, +300 shell. 5 s cd. +20 Heat.
**2 Arc Shot**: instant 330 to your target (20 m). +16.
**3 Breaker Line**: costs 20. 1 s cast, 1,075 in a 20 x 3 m line. 8 s cd.
**4 Bulwark Wall**: costs 25. A 10 m wall at your cursor for 6 s: 1,450 and a 4 s taunt in 3 m; crossers slowed 50%. 10 s cd.
**E Defiance Flare**: taunts your target and all in 4 m for 4 s; they hit you 10% softer. 12 s cd.
**R Disruptor**: 200 along your facing (20 m), interrupts. 12 s cd.
**Q Backlash**: charges when an enemy hit breaks a barrier on you or empties your shell; half per 24 Heat spent. 1,080 to your target.
**F Sunder Beam**: rooted 3 s beam (40 x 4 m) you steer slowly: 520 every 0.25 s, +2 Heat, 30% less taken. 90 s cd.
**G Vent Shield**: vents all Heat into a shield (27 each, max 2,600) for 8 s; ends an Overheat. 45 s cd.
**Left click Arc Round**: 140 along your facing. +3 Heat (99 at most).
**Options:** Ironclad (+2,000 shell), Force Wall (cover), Grav Sigil, Thermal Jets, Recoil Blast, the pools; shared damage at 74%.
**Play it:** build Hot, spend into the shell, wall packs, Flare strays; Vent Shield big hits, Overheats. **Wallwright** (Q Wall Slam): 3 enemies in 3 m of a wall, or 36 Heat spent (target only): 520 each, 2 s taunt.
**Trial (10):** Rampart's Line: absorb 3,000, 10 taunts, 5 Bulwark Walls.
**Gear:** Warstaff (breeze rod): +10% damage as a Warcaster. Cantrips: Sturdy (-6% taken, rare), Vigorous (+6% health), Quickstep (-15% evade recharge).
**Mastery (20):** none yet.

---

**Warcaster · Bombard** (role: Damage, 10,000 health; READY: fully playable)
**Resource:** Heat 0-100, cools 8/s. Hot at 70+: +10% damage. A builder at 100 Overheats: builders locked 2 s, then 50.
**Standoff:** +10% damage on enemies 8 m or more away (edge to edge), on top of Hot.
**1 Arc Shot**: instant 330 to your target (20 m). +16 Heat.
**2 Flak Burst**: 1,015 in a 60° 14 m cone. 5 s cd. +18 a press.
**3 Siege Shell**: costs 25. 1 s cast, 1,265 to the first enemy along your facing (20 m). 9 s cd.
**4 Breaker Line**: costs 20. 1 s cast, 1,075 in a 20 x 3 m line. 8 s cd.
**E Disruptor**: 200 along your facing (20 m), interrupts. 12 s cd.
**R Recoil Blast**: 300 in a 60° 6 m cone, knocks regular enemies back 6 m and throws you 8 m back. 16 s cd.
**Q Redline Round**: lit while your Heat is 80 to 99, dark while Overheated. 1,210 to your target (20 m), Hot and Standoff on top; rests 6 s.
**F Sunder Beam**: rooted 3 s beam (40 x 4 m) you steer slowly: 520 every 0.25 s, +2 Heat, 30% less taken. 90 s cd.
**G Vent Shield**: vents all Heat into a shield (27 each, max 2,600) for 8 s; ends an Overheat. 45 s cd.
**Left click Arc Round**: 140 along your facing. +3 Heat (99 at most).
**Options:** Mortar (lands 1.5 s later), Concussion Shell (knockdown), Grav Sigil, Thermal Jets, the Warcaster pools; all in full.
**Play it:** stay 8 m out; Flak Burst and Arc Shot to Hot, Siege Shell and Breaker Line to spend; never let a builder hit 100; Recoil Blast when they close in. **Siegebreaker** (Q Shockline): 3 enemies in your facing 20 x 4 m line, or 4 builder hits on your target: 260 each.
**Trial (10):** Bombard's Range: 40 Standoff hits, 5 Siege Shells while Hot, 5 Recoil Blasts.
**Gear:** Warstaff (breeze rod): +10% damage as a Warcaster. Cantrips: Keen (+5% damage), Hastened (-5% cooldowns, rare), Surging (+10% damage below 50% health, rare).
**Mastery (20):** none yet.

---

**Mender · Weaver** (role: Healer, 9,000 health; READY: fully playable)
**Resource:** Motes 0-6 (pips), start 3, refill to 3 out of combat. One held 12 s in combat, or pushed out by a seventh, heals the most injured 2%.
**Seeds:** up to 3 per unit (not drawn yet), gone 15 s after the last; each on an ally heals 36/s; Blossom and Q bloom them.
**1 Seedmend**: heals your ally target 400 and plants 1 Seed. +1 mote.
**2 Blossom**: costs 2. Snaps to the ally nearest your cursor: the 3 most injured within 6 m heal 440 + 220 per Seed bloomed.
**3 Renewal**: costs 3. 1.5 s cast, heals your ally target 2,300; never blooms.
**4 Thorn Lash**: 290 and 1 Seed on your target (25 m). +1 mote.
**E Petal Step**: glide up to 12 m; the landing cleanses bleeds, burns, poisons, slows, roots within 3 m. 18 s cd.
**R Bark Skin**: costs 1. Your ally target gets a 20% barrier for 8 s. 25 s cd.
**Q Verdant Burst**: lit while you or an ally carry 3 Seeds: blooms them, 210 + 105 each, and 300 to your target. Solo, your target's 3 burst, 150 + 155 each.
**F Wellspring**: 10 m, snapped to the ally nearest your cursor, 6 s: the 5 most injured inside heal 4%/s, enemies take 1,100/s. 90 s cd.
**G Cocoon**: 2 s rooted, immune to non-lethal hits, can't act (G or Esc ends it); then 1.7%/s for 10 s. 60 s cd.
**Left click Mote Flick**: 145. No mote, no Seed.
**Options:** Rescue Vine, Stifle, Unfurl, Entangle, the Mender pools; shared damage at 98%.
**Play it:** plant, then bloom: Seedmend the tank to 3 Seeds (108/s), Blossom a seeded group, Renewal big drops, Bark Skin heavy hits, Petal Step bleeds. Spend motes.
**Trial (10):** Weaver's Garden: heal 12,000, 2,500 by Blossom, 3 Petal Step cleanses.
**Gear:** Lifeward (totem of undying, off-hand): +10% resource gain as a Mender. Cantrips: Focused (+10% resource gain), Hastened (-5% cooldowns, rare), Vigorous (+6% max health).
**Mastery (20):** none yet.

---

**Mender · Blight** (role: Damage, 9,000 health; PREVIEW: Seeds, blooms and motes work; Siphon's tether is not in yet)
**Resource:** Motes as the Weaver's; a drifting one heals the most injured ally, never you.
**Seeds:** your builders seed enemies (at most 3, gone 15 s after the last, not drawn yet); they never heal. A spender blooms the Seeds on what it hits; a bloom on your target bursts onto enemies within 4 m for 40% of what they added.
**1 Spirit Bolt**: 1.2 s cast, 465 and 1 Seed on your target (30 m). +1 mote.
**2 Siphon**: 180 and 1 Seed on your target (25 m). +1 mote. (Its tether is not in yet.)
**3 Heartrot**: costs 3. 620 + 400 per Seed bloomed on your target. 6 s cd.
**4 Wither**: costs 2. 1 s cast, 1,120 + 135 per Seed bloomed in a 20 m line. 8 s cd.
**E Stifle**: 150 and interrupts a cast (30 m); a stopped cast takes 2 Seeds. 12 s cd.
**R Unfurl**: +30% speed for 3 s; your next cast of 1.5 s or less within 3 s is instant. 20 s cd.
**Q Reap**: opens for 4 s after 10 s on the same target (the tether route comes later). 1,000 to it (30 m).
**F Wellspring**: a 10 m spring snapped to the ally nearest your cursor, 6 s: enemies take 1,100 a second, the 5 most injured allies heal 4% (not you). 90 s cd.
**G Cocoon**: 2 s rooted channel, immune to non-lethal hits, unable to act (G or Esc ends it); then 1.7%/s for 10 s. 60 s cd.
**Left click Mote Flick**: 145. No mote.
**Play it:** seed, then cash in: Spirit Bolt and Siphon seed your target, Heartrot blooms three for 1,820 and bursts onto its neighbours, Wither a seeded pack. Stay on one target for Reap, Stifle casters. On Overgrowth, Thornburst opens when one spender blooms 3+ Seeds.
**Gear:** Lifeward (totem of undying, off-hand): +10% resource gain as a Mender. Cantrips: Focused (+10% resource gain), Keen (+5% damage), Hastened (-5% cooldowns, rare).
**Mastery (20):** none yet.

---

**Bladesinger · Dirge** (role: Damage, 10,500 health; READY: the Song and Crescendo work; its own pass (options, a Trial, tuning) comes later)
**Resource:** Cadence 0-100, starts empty. Keening Edge +25 a hit, basic +4; Verses (spenders) cost 25. 1.5 s without a core press or swing (or out of combat): drains 25/s.
**Song:** 8 m (not drawn yet), every 2 s in combat at tier 1/2/3 (34/67/100 Cadence, held over the beat): 90/180/270 split among the enemies inside you hit in the last 4 s.
**1 Lament**: costs 25. 1,500 to your target (4 m). 8 s cd.
**2 Requiem**: costs 25. 540 in a 90° 6 m cone, +25% per Song tier (945 at 3). 10 s cd.
**3 Verse of Steel**: costs 25. 940 to your target (4 m).
**4 Keening Edge**: 330 in an 8 m line. +25 Cadence.
**E Discord**: 200 in a 60° 10 m cone, interrupts casts, stuns regular enemies 1 s. 20 s cd.
**R Glissando**: glide up to 15 m; 300 within 3 m of the landing. 15 s cd.
**Q Counterpoint**: lit 4 s on your fourth builder/spender switch. 800 to your target (10 m).
**F Crescendo**: 3 s half-speed dance, Cadence held at 100: 300 within 6 m a second; finale 1,800 within 10 m, allies in 10 m heal 8% + 10% barrier 4 s. Evade or knockdown cuts it. 90 s cd. (Shared until the Dirge pass.)
**G Hold the Note**: 30% less non-lethal damage for 7 s; Cadence holds. 45 s cd.
**Left click Spin Note**: 150 split within 3 m. +4 Cadence.
**Options:** Tuning Fork, Lullaby (sleep 4 s until hit), Allegro, the pools.
**Play it:** alternate Keening Edge and Verses (lights Q); Lament on cooldown, Requiem from a full bar. **Choirmaster** (Q Chorus): 4 notes from the Song's strikes, then 360 to every enemy in your Song you hit in the last 4 s.
**Gear:** War Horn (goat horn): +10% move speed as a Bladesinger. Cantrips: Keen (+5% damage), Hastened (-5% cooldowns, rare), Surging (+10% damage below 50% health, rare).
**Mastery (20):** none yet.

---

**Bladesinger · Cantor** (role: Healer, 10,500 health; READY: fully playable)
**Resource:** Cadence 0-100, starts empty; basic +4. 1.5 s with no core press or swing, or out of combat: -25/s.
**Song (Hymn):** 8 m (not drawn yet), every 2 s in combat: at 34/67/100 Cadence heals the 2 most injured inside 125/220/310 (nobody alone).
**1 Mending Measure**: 300 in an 8 m line; a hit heals your ally target in the Song, else its most injured, 420 (alone: you, half). +25 Cadence.
**2 Soothing Arc**: costs 20. 120° 10 m arc: 3 most injured heal 400.
**3 Aria**: costs 40. 1 s cast: ally target 1,400 (25 m).
**4 Sustain**: costs 20. Ally target, else the most injured (25 m): 1.5%/s for 10 s. 10 s cd.
**E Sanctuary Leap**: to the ally nearest your cursor (20 m): 15% barrier 6 s (else you). 20 s cd.
**R Clarion Note**: up to 3 allies in a 120° 10 m arc, afflicted first: cleanse bleeds, burns, poisons, slows, roots; +200. 15 s cd, off GCD.
**Q Answering Chord**: lit 4 s when you or an ally takes a heavy hit (half per spender hit): heals the one hit (else the most injured) 1,100, 550 to the nearest enemy.
**F Crescendo**: 3 s half-speed dance: 300/s within 6 m, then 1,800 within 10 m; allies there heal 8% + 10% barrier 4 s. Evade or knockdown cuts it. 90 s cd.
**G Hold the Note**: 7 s: 30% less non-lethal damage, Cadence holds. 45 s cd.
**Left click Spin Note**: 150 split in 3 m. +4 Cadence.
**Options:** Verse of Steel, Caesura, Resonance, Allegro, the pools; shared damage at 72%.
**Play it:** heal by fighting: land Mending Measure, keep Cadence over 34 for the Hymn, Aria big drops.
**Trial (10):** Cantor's Refrain: heal 12,000 (2,500 by Mending Measure), 3 Clarion cleanses.
**Gear:** War Horn (goat horn): +10% move speed as a Bladesinger. Cantrips: Focused (+10% resource gain), Vigorous (+6% max health), Hastened (-5% cooldowns, rare).
**Mastery (20):** none yet.

---

**Duelist · Fencer** (role: Damage, 10,500 health; PREVIEW: Openings, finishers, dashes, Flèche and Riposte are not in yet: most of the kit does nothing today)
**Resource:** Poise, 0 to 100, starts full. Refills 15 a second (25 out of combat); your moves cost it, your basic attack adds 5. (Openings, the combo points finishers spend, are not in yet; only Q counts them.)
**1 Quick Lunge**: costs 13. 380 to your target (5 m). No cooldown.
**2 Twin Pass**: a dash through enemies and back. Not in yet.
**3 Remise**: a finisher. Not in yet: it costs 25 Poise and deals nothing.
**4 Coup Mortel**: a finisher and execute. Not in yet: it costs 18 Poise and deals nothing.
**E Beat**: 200 and interrupts a cast (6 m). 12 s cooldown.
**R Light Feet**: +30% speed for 4 s. 20 s cooldown. (Casting at full speed is not in yet.)
**Q Touché**: opens for 4 s when a finisher spends 5 Openings on your target: Quick Lunge it 5 times (Q counts them, 1/5 to 5/5), then press Remise. 1,000 to it (5 m).
**F Flèche**: five darting lunges. Not in yet.
**G Riposte**: a 1 s parry. Not in yet.
**Left click Rapier Thrust**: 150 to each enemy in a 5 m line. +5 Poise.
**Play it:** today Quick Lunge, Rapier Thrust, Beat, Light Feet and Touché work. Lunge five times, Remise, then Q; swing Rapier Thrust while Poise refills, Beat a cast, Light Feet to reposition. With no working F or G, Shift is your only defence. Play a fully playable spec for real runs.
**Gear:** class piece Twin Rapier (iron swords, one per hand): +6% damage each as a Duelist, +4% more with both. Cantrips: Keen (+5% damage), Hastened (-5% cooldowns, rare), Quickstep (-15% evade recharge).
**Mastery (20):** none yet.

---

**Duelist · Reaver** (role: Damage, 10,500 health; PREVIEW: Openings, finishers, bleeds, dashes, Flèche and Riposte are not in yet: most of the kit does nothing today)
**Resource:** Poise, 0 to 100, starts full. Refills 15 a second (25 out of combat); your moves cost it, your basic attack adds 5. (Openings, the combo points finishers spend, are not tracked yet.)
**1 Quick Lunge**: costs 13. 380 to your target (5 m). No cooldown.
**2 Raking Cut**: costs 16. 360 to each enemy in a 90° 7 m cone. 6 s cooldown. (Its bleed restart and its wait for a blinking bleed are not in yet: it is usable any time.)
**3 Lacerate**: a finisher with a bleed. Not in yet: it costs 25 Poise and deals nothing.
**4 Balestra**: a dash-strike finisher. Not in yet.
**E Beat**: 200 and interrupts a cast (6 m). 12 s cooldown.
**R Light Feet**: +30% speed for 4 s. 20 s cooldown. (Casting at full speed is not in yet.)
**Q Open Vein** (provisional): opens for 4 s on every third spender on your target (Lacerate counts) until bleeds land. 380 to it (5 m).
**F Flèche**: five darting lunges. Not in yet.
**G Riposte**: a 1 s parry. Not in yet.
**Left click Rapier Thrust**: 150 to each enemy in a 5 m line. +5 Poise.
**Play it:** today Reaver is Quick Lunge and Raking Cut. Open with Raking Cut into the pack, Lunge your target, Raking Cut again on cooldown, and swing Rapier Thrust while Poise refills. Three Lacerates light Open Vein. Beat a cast. No bleeds, F or G yet, so lean on Shift for telegraphs.
**Gear:** class piece Twin Rapier (iron swords, one per hand): +6% damage each as a Duelist, +4% more with both. Cantrips: Keen (+5% damage), Hastened (-5% cooldowns, rare), Quickstep (-15% evade recharge).
**Mastery (20):** none yet.

---

**Marksman · Sharpshooter** (role: Damage, 9,000 health; READY: fully playable)
**Resource:** Focus, 0 to 100, starts full. Refills 12 a second once you have stood still 0.75 s, 3 while moving, 25 out of combat; builders add more, spenders cost it.
**1 Kill Shot**: costs 35. 1.75 s rooted cast, 1,950 to your target (40 m). 10 s cooldown.
**2 Piercing Shot**: costs 30. Instant 1,300 to everything in a 40 m line. 8 s cooldown.
**3 Heartseeker**: costs 35. Instant 770 to your target (35 m). No cooldown.
**4 Sighting Shot**: 1.5 s cast, 670 to your target (40 m). No cooldown. +12 Focus.
**E Silencing Shot**: 200 and interrupts a cast (35 m); +20 Focus if it does. 12 s cooldown.
**R Tumble**: roll 8 m the way you are moving (backward when standing); you stay Steady. No immunity. 12 s cooldown.
**Q True Shot**: lit once you have stood still 1.5 s with your target within 40 m and in sight. 980 to it; rests 6 s.
**F Deadeye Volley**: locks your target and 4 more enemies in a 60° 40 m cone; 2 s later each still in sight takes 3,500, your target 7,000. 90 s cooldown.
**G Disengage**: leap 12 m backward, immune for 0.4 s; the 4 m circle you left slows enemies 40% for 3 s. 40 s cooldown.
**Left click Quick Shot**: 130 to your target. +2 Focus.
**Steady Aim:** stand still 1.5 s and you deal 6% more until you move.
**Play it:** pick a spot far back and stand still: you turn Steady, Focus refills fast and True Shot lights. Kill Shot on cooldown, Piercing Shot through lined-up packs, Sighting Shot to build, Heartseeker to dump Focus. Tumble out of a telegraph without losing Steady; Disengage when something reaches you.
**Gear:** class piece Longbow (bow, weapon): +10% damage as a Marksman. Cantrips: Keen (+5% damage), Hastened (-5% cooldowns, rare), Surging (+10% damage below 50% health, rare).
**Mastery (20):** none yet.

---

**Marksman · Trapper** (role: Damage, 9,000 health; READY: fully playable)
**Resource:** Focus, 0 to 100, starts full. Refills 12 a second standing still or while a trap of yours is out, 3 while moving, 25 out of combat.
**1 Blast Trap**: costs 35. A 4 m trap at your cursor (30 m): 2,250 to everything in it and a 1 s knockdown on regular enemies. 12 s cooldown.
**2 Spike Trap**: a 2.5 m trap at your cursor (30 m): 500 when it springs. 3 s cooldown. +8 Focus when it springs.
**3 Trip Shot**: costs 35. 720 to your target (30 m); your armed traps within 8 m of it leap onto it and spring.
**4 Drawn Shot**: 1 s cast, 480 to your target (35 m). No cooldown. +8 Focus.
**E Snare Trap**: a 3 m trap: 200, roots regular enemies 2 s, slows everything caught 40% for 3 s. 18 s cooldown.
**R Silencing Shot**: 200 and interrupts a cast (35 m); +20 Focus if it does. 12 s cooldown.
**Q Quarry Shot**: opens for 4 s when your target springs one of your traps, or on every third spender on it. 950 to it (30 m); rests 6 s.
**F Deadeye Volley**: locks your target and 4 more in a 60° 40 m cone; 2 s later each still in sight takes 3,500, your target 7,000. 90 s cooldown.
**G Disengage**: leap 12 m backward, immune for 0.4 s, leaving a 4 m slow. 40 s cooldown.
**Left click Quick Shot**: 130 to your target. +2 Focus.
**Traps:** arm 1 s after placing and spring once when an enemy steps in; at most 3 out (a fourth replaces the oldest), 30 s each.
**Play it:** lay traps where the pack will walk: Spike Trap under your target, Blast Trap on the pack, Snare Trap on the dangerous one. Keep one out so Focus refills on the move. Trip Shot throws your traps onto an enemy that avoids them.
**Gear:** class piece Longbow (bow, weapon): +10% damage as a Marksman. Cantrips: Keen (+5% damage), Hastened (-5% cooldowns, rare), Focused (+10% resource gain).
**Mastery (20):** none yet.

---

**Beyond the default kit**

Each spec above shows its default loadout. Every Expertise has 8 core and 5 utility options, plus a few per Discipline: `/cf loadout` swaps your 4 core and 2 utility picks, Talent path and rows (out of combat); `/cf loadout reset` restores the default. The Spell Book (K) explains each option and the level or Trial that unlocks it. `/cf kit list` shows all 16 Disciplines.

---

**Around the world**
**Homes:** `/home set` marks your home in the survival world; `/home` takes you back (hold still 3 s), and from the hub or the Quarry at once (not from the Nether, the End or a Breach).
**Lifts:** a `[lift]` sign (second line; the first names the floor) on each floor, straight above the last and at most 64 blocks apart: left-click rides up, right-click down, sneak breaks it.
**Locks:** `/cf lock`, then right-click a chest, door or trapdoor; `/cf lock add <name>` shares it. Redstone and mobs cannot open a locked door.
**Sorting:** the inventory's Sort button sorts the bag (never the hotbar), right-click for the mode; the Vault tab beside Packs opens your Breach vault.
**Personal loot:** a Breach or Manor chest opens your own share (gear, bottles, lapis, at most one book); what you leave comes home: gear to the vault, the rest to your bag.
**The Manor:** enter at the Raid Gate on the hub's east terrace. The Hostess holds the ballroom (interrupt her Crescendo); the foyer and the cask stacks come in waves. In the Soiree each boss room pays its loot, relic and Shards (5 to 15) once a week, after that only XP and tokens (`/cf raid lockouts`). Dropped? Log back in within 5 minutes to rejoin the run.
**Towns:** a mayor can name assistants (`/cf town assistant <name>`). Only they build on town land; on a plot only its owner and the players they `/cf plot allow`. The mayor and assistants can stop all crop trampling in town (`/cf town trample off`, `on` again) and share every plot's crops with all members (`/cf town crops shared`, `owner` again); `/cf town info` shows both.

Found a bug, or an ability that does not do what this guide says? Post it in the Discord with your Discipline, the key you pressed and what happened. Preview specs fill in as their class passes land, and the six provisional Talents get their real triggers with them.

---

# Professions

**The rules**
**Cap 50:** ten professions level on their own from 1 to 50 (about 84,000 XP to 30, 395,000 to 50): Mining, Excavating, Lumberjack, Farming, Fishing, Smithing, Alchemy, Hunting, Acrobatics and Unarmed.
**Where:** XP pays in every survival world (the main world, the frontier and their Nethers and Ends) and the Quarry; never in the hub or a Breach.
**Each has** a Knack (always on, growing every level), ranks at set levels ("Rank 1 unlocked: Ore Sense"), the gathering five a Sense (Mining's is the Prospector's Fork's ping) and a Prime: right-click the tool (sneak + right-click the rod), then use it within 10 s; 180 s cooldown. The newer five start theirs with a sneaking right-click (Acrobatics has none).
**Placed blocks pay nothing:** no XP, Knack roll or finds from a block any player placed, or from generator stone, basalt and obsidian.
**Over-fishing:** after ten catches in one spot it gives junk and no XP until you move a few blocks; a catch reeled in within 1 s of the cast pays nothing.
**Party share:** party members in the same world within 50 m share profession XP: each gets 1.5 x the XP / the sharers (two get 0.75 each). On by default; the leader types `/cf party share off` (or `on`).
**Spell Book (K):** the Professions tab shows each profession's Knack, ranks and Prime with their numbers and next unlock. `/cf professions` lists your levels.
**HUD:** in survival mode the resource bar and Evade charges step aside; hold a tool or a weapon, look at a station or punch with an empty hand, and the bar under your health becomes its XP bar (name and level left, XP right), its Prime right of the bars (a cooldown ring, "Ready", "Primed", "Active").
**Milestones:** every 10th level goes to your world's chat and the Discord events channel. The Senses' show / hide key is unbound in Options > Controls > Confluence combat.

---

**The Quarry:** a Peaceful world off the hub for digging in bulk: a desert of sand, a hill of stone, a forest of logs, with no scar on the worlds you live in.
**Getting in:** the Quarry Gate, a sandstone arch 16 blocks north of the World Gate at the end of the plaza's west arm. Step onto its sill with a Quarry Ticket in your bag: one ticket, one hour, and you arrive on the Quarry hub. The hour keeps running while you are out or logged off, and until it ends the gate lets you back in free. A bar shows the time left, with warnings at 5 and 1 minutes; at the end a dialog offers another ticket to stay, else you go to the hub with your bag. `/cf quarry` shows your tickets, your time and the next reset.
**Tickets:** from Breach chests (10% a player at Breach I, 3 points more a tier, 25% at Warden's Breach), the Manor's chest (25% in the Rehearsal, 35% in the Soiree), Excavating from 25 (a rare find in the wilds, never in the Quarry itself), and the Town Warden sells them for ¥400. They stack and trade; the Hub Market does not buy them.
**Inside:** no hostile mobs, no combat mode (B is refused), and nothing hurts you: falls, lava, fire, water, cactus, TNT. A fall into the void puts you back on the Quarry hub; your hunger stays full. Professions pay in full (Acrobatics aside). TNT goes off here, and only here, so Breaker Charges work. Vanilla portals do nothing and a bed sets no spawn (an anchor explodes, as in any overworld); the platform's middle frame or `/cf hub` leaves.
**The reset:** every Sunday at 04:00 the Quarry is wiped and made again from the same map: the land comes back as it was, every hole filled and every tree standing, and the platform and the pads stand where they stood. Warnings at 30, 10 and 1 minutes, in the Quarry and on Discord; anyone inside goes to the hub with their bag and keeps their time. Nothing built or left there is kept.

---

**The Quarry hub:** a sky platform ringed by fourteen portals, one per biome: Desert, Badlands, Forest, Taiga, Jungle, Swamp, Mountains, Ocean, Savanna, Snowy, Cherry, Dark Forest, Mushroom and Lush Caves, each built from its biome's blocks. Step into one to land on a pad in the middle of a big patch of that biome (the Ocean's on a beach, the Lush Caves' in a room underground); the frame on the pad brings you back to the platform, and the frame in the platform's middle takes you home. A portal with a black glass sill and "Not in this Quarry" on its sign leads nowhere: that biome is not near enough on this map. The platform and the pads cannot be dug, built on, reshaped with a tool or bone meal, or blown up; falling off the platform does not hurt.

---

**Hub gates:** two more arches stand in the World Gate's row at the end of the plaza's west arm. The **Nether Gate** (obsidian with crying obsidian and soul lanterns, just south of the World Gate) opens for good for one Ghast Tear: trade it to the Town Warden ("Open the Nether Gate: 1 Ghast Tear"; a tear in your survival hotbar slot 1 counts too). Its sill takes you to a landing room in the Nether, an obsidian floor walled in from the lava, and the frame on that room's north wall brings you back to the hub. Until then the sill only says "Sealed. The Warden opens it for a Ghast Tear." The **End Gate** (end stone and purpur, north of the Quarry Gate, its sill three lit portal frames) opens for Wilds Pass holders and for anyone in a party whose holder is online, checked each time you step on: you land on the End's obsidian platform, so a holder can take friends to the dragon for eggs of their own. The End's exit portal brings you home the vanilla way, and `/cf hub` always works. Neither gate touches your bag. `/cf gates` shows both.
**Hub signs:** floating names hang over the hub's places and turn to face you: The Confluence over the dais, The Plaza, each gate (World, Quarry, Nether, End and the Raid Gate), The Records on the north-west terrace, The Calendar, The Market, The Breaches and The Arena over their islands, The Spire on its top. The signs with the rules and prices are still there.

---

**Echoes:** once a day, walk to the **Calendar** on the east grass south of the plaza's east arm (a copper wall with a dark board of cells, facing the plaza) and step onto its amethyst sill, or right-click the board: you claim the day's **Echo** ("An Echo: 12 Echoes, a 4-day streak."). Echoes live on your character, never in your bag. A day turns at 04:00 server time; a second touch says when the next one comes. The board shows this month (Monday first, today's number in gold) and lights the days you claimed, for you alone.
**Streaks:** claim on days in a row. Days 7, 14, 21 and 28 of a streak pay a bonus Echo. Missing a day starts the streak over but never takes Echoes. A 7-day streak earns the title **the Faithful**, a 30-day streak **Keeper of the Tide** (wear them at the Curator); they are never sold.
**The Chronicler** (Breach island, beside the Curator) trades Echoes for prizes: 7 for a Quarry Ticket or 300 Yen; 14 for an enchanted book (from your best Breach clear's book table) or 3 Bottles o' Enchanting; 30 for any cosmetic the Curator sells that you don't own; 60 for the **choice crate**: three cantrip pieces at your level are shown and you keep one (the Echoes go when you pick; close it and nothing is spent). Prices are spent, nothing refunds; a full bag drops the prize at your feet.
**Sunday raffle:** every Echo you claim from Monday 04:00 to Sunday 20:00 is a ticket in that week's draw at 20:00 Sunday. The winner gets a Quarry Ticket and 500 Yen (at once if online, else waiting at the Chronicler) and it is posted in Discord. `/cf echoes` shows your Echoes, streak, next bonus day, raffle entries and titles.

---

**Deeds:** Confluence's achievements. Press **L** (Advancements) and open the **Confluence Deeds** tab: one icon per Deed, lit when earned, grey for what comes next. Earning one pops the toast and says "Deed earned: First Step (+10 points)". 25 to start: Breach clears (your first, the Warden's Breach, one with no deaths, one in each role), kills in Breaches (100, 1,000, 10,000), the Manor and the Curator's chests, profession levels (10, 25, 50, and the five gathering ones at 25), blocks, finds and ten hunting trophies, a night survived in the wilds (dusk to dawn, no dying or sleeping), the Wilds Pass, the dragon, the Nether Gate, 1,000 Quarry blocks, founding a town, a Breach in a party of four, and healing. Three are secret: nothing in the tab and only "???" in /cf deeds until you stumble into them.
**Rewards:** Deed Points (10, 25 or 50 a Deed) on the new **Deed Points** board on the north-west terrace (`/cf top deeds`), and three titles you can no longer buy: **the Breacher** (your first Breach clear), **Skitter Stomper** (100 Breach kills) and **Gate Breaker** (the Warden's Breach); wear them at the Curator. No Yen or tokens. The rare ones are announced to the server and in Discord.
**Already done it?** Your levels, the Wilds Pass, the Nether Gate and the Breaches you have cleared count at your first login, and so do your Breach kills. `/cf deeds` lists every Deed with your progress ("307/1,000"), your points and titles; `/cf deeds <id>` shows one.

---

**Packs:** a shulker box equipped as a pack (`/cf pack equip <slot>` with the box in your hand; the inventory's Packs tab lists your packs and opens them) holds its items off your bag, everywhere but a Breach.
**Overflow:** switch it on for a pack and, once your bag is full, what you pick up goes into it: first onto a stack of the same item a pack already holds, then into the empty cells of a pack that holds that item, then into any other pack switched on, pack 1 before 2 before 3. Your bag always fills first. It is off until you turn it on: the hopper at the right end of the row under the pack's cells ("Overflow: off" / "Overflow: on") or `/cf pack overflow <1|2|3> on|off`; `/cf pack` lists your packs with their switch. The switch stays with the box (its lore reads "Overflow: on").
**Never flows:** a shulker box, and Breach gear (it still goes to your vault). At most once a minute you are told "Your bag is full: the rest goes into Pack 2."; with every pack full as well, the item stays on the ground.

---

**Mining** (pickaxe)
**XP:** stone, deepslate and netherrack 1, coal ore 5, copper, nether quartz and amethyst clusters 6, iron, nether gold and obsidian 8, redstone 10, lapis 12, gold 14, diamond and emerald 30, ancient debris 40 (deepslate ores 1 or 2 more; cobblestone 0). In every survival world, the Nether's ores too.
**Knack: Deep Pockets:** ores drop an extra set, 2% a level (100% at 50). Ores only: stone drops once.
**Ore Sense (10, 25, 40): the Prospector's Fork.** Craft it from two iron ingots side by side over a stick (20 rings). With an ore's metal in the off hand (iron, copper, gold or a nugget, coal, redstone, lapis, diamond, emerald, an amethyst shard, quartz, netherite scrap) left-click stone, deepslate, netherrack, basalt or end stone: three sonar waves sweep out 8, 12, then 16 m and that ore flashes through the stone as each passes: 3 s, 180 s cooldown at 10; 6 s, 120 s at 50. A pickaxe alone shows nothing.
**Fuel Efficiency (15):** furnaces and blast furnaces you placed burn fuel twice as long while you are online.
**Breaker Charges (20, 30, 40, 50):** sneak + right-click a TNT block within 20 m holding a pickaxe: it goes off at once. Ores in the blast drop as your pickaxe would mine them and pay Mining XP, with a 35/45/55/70% chance of one more set; the blast harms you 0/25/50/100% less. Only where TNT may go off: the Quarry, nowhere else.
**Second Smelt (30):** your furnaces sometimes smelt a raw metal or ore twice (30% at 30, 50% at 50) when the output slot has room.
**Mother Lode (40):** ores sometimes drop three times (40% at 40, 50% at 50).
**Prime: Surge:** right-click the pickaxe, then break a block: Haste I for 10 s; Haste II for 15 s from 10; Haste III for 20 s from 20, 30 s from 30.
**Top rank (50):** every double drop is a triple while Surge runs.
**Finds:** none; ores and ingots sell on the Hub Market's Materials page.

---

**Excavating** (shovel)
**XP:** dirt, grass, sand and snow blocks 1, gravel, soul sand and soul soil 2, clay 4, plus each find's own XP. In every survival world (soul sand in the Nether).
**Knack: Steady Hands:** sand, gravel, clay, soul sand and soul soil drop an extra set, 2% a level (100% at 50); from 40 a triple instead (40% at 40, 50% at 50). Dirt drops once.
**Unearthing (5, 15, 25, 35, 50):** digging turns up finds with the block, each paying Excavating XP. 5: bone, string, Lore Scraps. 15: Old Coins, gunpowder, slime balls. 25: Relic Shards (gravel, sand, clay, soul sand), name tags, and rarely a Quarry Ticket (dirt, gravel, sand, clay; never in the Quarry itself). 35: glowstone dust (soul sand and soil), bottles o' enchanting, more Lore Scraps from sand. 50: music discs (13, cat) and Relic Shards from dirt too. Never a gem.
**Burrow Sense (20; the Sense):** with a shovel in hand, the open faces of the ground finds come out of (sand, gravel, clay, soul sand, soul soil) within 8 m show a faint frame.
**Archaeologist (40, 50):** each find also gives 2 vanilla XP, 4 from 50.
**Prime: Wide Spade:** right-click the shovel, then dig: each block breaks the 3x3 face around it (stone stays) for 8 s; 12 s from 10; 2 deep for 15 s from 20; 3 deep for 20 s from 30.
**Top rank (50):** three finds rolls per block and 3x XP while it runs (at the cap that XP reaches your party share).
**Finds:** Lore Scrap about ¥1,200, Relic Shard about ¥2,400, Old Coin about ¥4,000 each at the Hub Market's Finds counter. Finds cannot be crafted or smelted. A Quarry Ticket is no Yen good: it is an hour in the Quarry.

---

**Lumberjack** (axe)
**XP:** every log and Nether stem 3, mangrove roots 1; each log Timber fells pays too. In every survival world (crimson and warped stems in the Nether).
**Knack: Heartwood:** logs drop an extra set, 2% a level (100% at 50); from 40 a triple instead (40% at 40, 50% at 50). Timber's felled logs roll it too.
**Clear Cut (10):** leaves break at the first hit of your axe.
**Seedfall (20, 40):** a tree Timber fells always drops its sapling (a mangrove its propagule, a Nether stem its fungus). From 40, natural leaves broken with an axe give an apple 5% of the time and an XP orb every time.
**Hollow Sense (25; the Sense):** with an axe in hand, bee nests and beehives within 16 m show an amber frame through leaves and trunks.
**Lumber Yard (30):** Timber's felled logs, their extra sets and the sapling go straight into your bag (never hotbar slot 1; what does not fit drops at your feet).
**Prime: Timber:** right-click the axe, then chop: every cut fells its whole tree (the same wood, up to 256 logs within 12 blocks) for 10 s; 20 s from 10; 30 s from 20; 45 s from 30. Each felled log costs the axe 1 durability.
**Top rank (50):** every felled log drops three times while Timber runs.
**Finds:** none; its goods are logs, saplings and apples.

---

**Farming** (any tool; a hoe for Replant and Green Thumb)
**XP:** ripe crops only: wheat, carrots, potatoes, beetroots and cocoa 3, nether wart 4, melons, pumpkins and other crops 2, a berry bush harvest 1; sugar cane, cactus, bamboo and kelp 1 a block; plus Hedge Finds' own XP. In every survival world (nether wart in the Nether). A green crop pays nothing.
**Knack: Verdant:** ripe crops (field crops, cocoa, nether wart, melons, pumpkins, berry bushes) drop an extra set, 2% a level (100% at 50). No triple.
**Crop Sense (2, 12, 24; the Sense):** ripe crops within 8 m get a green frame; from 12 every crop shows its growth, red to green, within 10 m; from 24 within 16 m. Cocoa is never framed.
**Replant (10, 25, 40):** a ripe crop broken with a hoe replants itself from a seed in your bag, 2% a level (20% at 10, 100% at 50), sprouting at stage 0, at 1 from 25, at 2 from 40.
**Farmer's Table (15, 30, 45):** farm foods (bread, carrots, potatoes, berries, melon, pie and more) restore 1, 2, then 3 more hunger.
**Hedge Finds (30):** flowers, bushes and grass broken with anything sometimes give seeds, apples and Pressed Flowers.
**Greenhouse (40):** while Green Thumb runs, right-click with wheat seeds: cobblestone and stone bricks turn mossy, dirt turns to grass (one seed each).
**Prime: Green Thumb:** right-click the hoe, then harvest a ripe crop with it: each harvest drops 1 extra set and replants for free, for 10 s; 15 s from 10; 2 extra sets for 20 s from 20; 3 for 30 s from 30.
**Top rank (50):** its replants sprout one stage further grown (stage 3).
**Finds:** Pressed Flower, about ¥2,000 at the Hub Market's Finds counter.

---

**Fishing** (rod)
**XP:** cod 5, salmon 6, pufferfish and tropical fish 8, any other catch 4; a treasure pays its rarity's XP instead (20, 40, 80, 150, 300, 600). In every survival world.
**Knack: Angler:** bites come 0.6% sooner a level (30% at 50).
**Treasure Lines (5, 15, 25, 35, 50):** some catches come up as treasure, about 1 in 14 at 5 and 1 in 8 at 50. Common: leather, copper, lapis, Sea Glass. Uncommon: stone and gold tools, gold. Rare: iron tools, bows, name tags, Tide Pearls. From 15 epic iron armour and saddles, from 25 legendary diamond tools, enchanted books and netherite scrap, from 35 mythic netherite tools. Vanilla's junk comes up as cod.
**Hooked (15, 30, 45):** reel in a mob you hooked: a 25/40/60% chance to shake a drop off it (leather, wool, gunpowder, pearls...) for 6 XP, and every reel-in tugs it a quarter of its health (at most 10). Spawner and egg mobs: nothing.
**Ice Fishing (20):** a cast onto ice over water opens a 3x3 hole.
**Fisher's Table (25, 45):** fish restore 1, then 2 more hunger.
**Deep Sense (35; the Sense):** with a rod in hand, treasure hotspots within 16 m shimmer on the water. A catch within 3 blocks of one rolls treasure at +50% odds and spends it for you until the hour turns.
**Enchanted Lines (40):** treasure gear comes enchanted half the time; enchanted books always carry one. Never a curse.
**Prime: Lucky Cast:** sneak + right-click the rod, then cast: bites 2x sooner for 20 s; 30 s from 10; 3x for 40 s from 20; 4x for 60 s from 30.
**Top rank (50):** the next 3 catches are sure treasure.
**Finds:** Sea Glass about ¥960, Tide Pearl about ¥3,200 at the Hub Market's Finds counter.

---

**Smithing** (Smithing Table, Grindstone, furnaces)
**Shows:** while you look at a Smithing Table, a Grindstone, a furnace, a blast furnace or a smoker within reach, whatever you hold.
**Repair:** right-click a Smithing Table holding a damaged tool, weapon or armour piece: one material from your bag (the anvil's: iron ingots, diamonds, planks, cobblestone, string for a bow...) restores a quarter of its durability; 1 XP per 10 points. With none: "An iron pickaxe needs iron ingots to repair." An undamaged item or an empty hand opens the vanilla table (netherite upgrades, trims).
**Salvage:** right-click a Grindstone holding a survival item, then again within 5 s: it is destroyed and gives back its material (one at first). 5 to 80 XP by material and wear (none when new). An empty hand opens the vanilla grindstone.
**Furnaces:** smelts you take out by hand from a furnace you placed: an iron or gold ingot 3, copper 2, glass and cooked food 1. Hoppers pay nothing.
**Knack: Repair Mastery:** +4% durability per material a level (three times as much at 50).
**Super Repair (10):** 10% of repairs restore double (30% at 50).
**Scrap Collector (15, 25, 35, 50):** a salvage returns 50/65/80/100% of the item's crafting cost, by the durability it has left.
**Arcane Forging (20, 30, 40, 50):** below 20 each enchantment of a repaired item vanishes half the time; from 20 it stays 50/75/90% of the time, else loses a level; from 50 always. A risky repair asks for a second right-click.
**Arcane Salvage (30, 40, 50):** a salvaged item's enchantments come off into books, 30/60/90% each.
**Second Smelt (45):** your furnaces sometimes smelt twice.
**Prime: Temper:** sneak + right-click the Smithing Table empty-handed: the next repair within 60 s is free, whole and keeps every enchantment. 300 s cooldown.
**Breach gear** is the Outfitter's business: never repaired or salvaged here.

---

**Alchemy** (brewing stands)
**Shows:** while you look at a brewing stand within reach.
**XP:** each stage brewed in a stand you placed: 2 a bottle for awkward, mundane or thick, 6 for an effect potion or a draught, 4 for extended, strong, splash or lingering. Someone else's stand pays neither of you, unless your town shares its stands: the mayor or an assistant types `/cf town stands shared` (`owner` undoes it).
**Knack: Catalysis:** your stages brew 1.5% faster a level (a 20 s stage takes 5 s at 50).
**Concoctions (10, 25, 40):** the Confluence draughts, one ingredient on an awkward potion in your own stand. 10: Draught of Vigour (a honey bottle: Haste II, 3 min) and Draught of Bulwark (an iron ingot: Absorption II, 2 min). 25: Draught of Stone Skin (an emerald: Resistance I, 3 min) and Draught of the Hearth (a cooked steak: Saturation, 1 min). 40: Draught of Tide's Grace (a nautilus shell: Dolphin's Grace and Water Breathing, 3 min). Gunpowder and dragon's breath make the splash and lingering forms. Before the rank: "Draught of Stone Skin needs Alchemy 25." Hoppers never feed a draught's ingredient.
**Steady Hand (20):** a stage sometimes leaves its ingredient in the stand (1% a level, 50% at 50).
**Apothecary (45):** every potion you brew lasts 50% longer.
**Prime: Catalyst:** sneak + right-click your own stand: its stage finishes at once, or the next one you start within 30 s. 120 s cooldown.
**Effects** never follow you into the hub or a Breach: they are cleared as you arrive.

---

**Hunting** (sword, bow, crossbow, trident, mace)
**Shows:** while you hold a weapon (an axe stays Lumberjack's on the bar, but its kills pay Hunting).
**XP:** a mob you kill with a weapon (a melee hit, an arrow or a thrown trident) in survival mode: half its max health (a zombie, skeleton or creeper 10, an enderman 20, a ravager 50), a passive animal a quarter of that, at least 1. Mobs from spawners, spawn eggs or breeding, villagers and traders pay nothing and drop nothing extra. Hunting adds no damage of its own.
**Knack: Trophies:** a kill sometimes drops a rare part (0.2% a level, 10% at 50): a zombie's, skeleton's or creeper's head, a wither skeleton skull, a drowned's trident, a strider's or ravager's saddle, a phantom's membrane.
**Fletcher's Eye (10):** arrows that hit a mob sometimes come back to your bag (1.5% a level, 75% at 50).
**Tracker (20):** a line right of the Hunting bar, "4 hostiles, north-east": how many hostiles are within 32 m and where most of them are.
**Bounties (25):** the Town Warden posts three bounties a week (64 rotten flesh, 48 bones, 24 gunpowder), handed in for Yen at a fifth over the Market's price.
**Beast Sense (35):** hostiles within 16 m show through walls as red boxes while a weapon is in hand (the Senses key hides them).
**Big Game (45):** the Ender Dragon and the Wither leave each Hunter at 45 in the killer's party a trophy: a Dragon's Fang or a Wither's Rib.
**Prime: Field Dressing:** sneak + right-click with your weapon: for 20 s every kill drops its loot twice. 180 s cooldown.
**Deed:** Trophy Hunter, ten trophies.

---

**Acrobatics** (falls; no tool, no bar)
**XP:** a fall that hurts you in a survival world: 3 XP a block past the first three, after your roll. The first fall in a chunk each minute pays, up to 43 blocks; a fatal fall pays nothing. Water and slime blocks don't hurt; a bed, a hay bale or a honey block softens a fall, and like an ender pearl's landing pays nothing. Never in the Quarry or the hub.
**Knack: Roll:** a 1% chance a level (50% at 50) that a fall hurts half as much ("You roll."); land sneaking for twice the chance and a quarter of the damage ("A graceful roll.").
**Soft Landing (15):** falls under 6 blocks never hurt.
**Cat's Feet (30):** falls under 8 blocks never hurt.
**Second Wind (50):** once a day, a fall that would kill you leaves you at 1 hp ("Second wind: you live.").
**No Prime.** `/cf professions`, the Spell Book and the hub board show it.

---

**Unarmed** (an empty hand)
**Shows:** while your main hand is empty and hit something in the last 10 s.
**XP:** 1 a point of damage your fists deal to a mob in survival mode, and a quarter of its max health when it dies within 3 s of your last punch. Mobs from spawners, eggs or breeding, villagers and pets pay nothing.
**Knack: Iron Arm:** your fists hit 1 harder every 6 levels (+8 at 48); a weak, spammed punch adds only part of it.
**Disarm (15):** a punch sometimes knocks the weapon out of a zombie's, skeleton's, piglin's, pillager's or vindicator's hands, never a spawner's (0.5% a level): "Disarmed: the zombie drops its iron sword."
**Arrow Deflect (25):** with an empty hand, arrows and tridents sometimes bounce off you (1% a level, 50% at 50): "Deflected."
**Steady Stance (35):** knockback taken unarmed is halved.
**Steel Arm (45):** Iron Arm +2 (+9 at 45, +10 from 48).
**Prime: Berserk:** sneak + right-click a block or a mob with an empty hand: 10 s of punches 50% harder, and sand, gravel, dirt, grass, mud, clay, soul sand and snow break at a punch. 240 s cooldown.
