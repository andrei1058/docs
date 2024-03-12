---
sidebar_label: PlaceholderAPI Support
title: PlaceholderAPI Support
sidebar_position: 3.2
---
**BedWars1058** is providing [PlaceholderAPI](https://www.spigotmc.org/resources/6245/) support since version 0.5 beta. Support is loaded when BedWars1058 Plugin is enabled. You don't have to download it from PAPI ecloud.

If you want Per Arena Group Stats Placeholder, you can use I6y's [GroupStats](https://polymart.org/resource/3184/) Addon for Per Arena Group Stats Placeholders. 

If you need help with using [PlaceholderAPI](https://www.spigotmc.org/resources/6245/) join their [Discord](https://img.shields.io/discord/164280494874165248).
## Player Level
Get the player level. FORMATTED.

Placeholder: `%bw1058_player_level%`

## Player Level Raw
Get the player level NUMBER.
Can be used for tops.

Placeholder: `%bw1058_player_level_raw%`

## Progress Bar (Level)
Get the player progress bar (formatted).

Placeholder: `%bw1058_player_progress%`

## Player Xp (Formatted)
Get the player current xp.
Large numbers are shortened: 1000 -> 1k

Placeholder: `%bw1058_player_xp_formatted%`

## Player Xp
Get the player current xp.

Placeholder: `%bw1058_player_xp%`

## Required Xp for Rankup (Formatted)
Get the player required xp for rankup.
Large numbers are shortened: 1000 -> 1k

Placeholder: `%bw1058_player_rerq_xp_formatted%`

## Required Xp for Rankup
Get the player required xp for rankup.

Placeholder: `%bw1058_player_rerq_xp%`

## First Play
Get first play date using the player's language date-format.

Placeholder: `%bw1058_stats_firstplay%`

## Last Play
Get last play date using the player's language date-format.

Placeholder: `%bw1058_stats_lastplay%`

## Regular Kills
Get a player's regular kills count.

Placeholder: `%bw1058_stats_kills%`

## Total Kills
Get a player's kills. (regular + final).

Placeholder: `%bw1058_stats_total_kills%`;

## Total Wins
Get a player's total wins count.

Placeholder: `%bw1058_stats_wins%`

## Final Kills
Get a player's total final kills count.

Placeholder: `%bw1058_stats_finalkills%`

## Total Deaths
Get a player's total deaths count.

Placeholder: `%bw1058_stats_deaths%`

## Total Losses
Get a player's total losses count.

Placeholder: `%bw1058_stats_losses%`

## Final Deaths
Get a player's total final deaths count.

Placeholder: `%bw1058_stats_finaldeaths%`

## Beds Destroyed
Get a player's total beds destroyed count.

Placeholder: `%bw1058_stats_bedsdestroyed%`

## Games Played
Get a player's total games played count.

Placeholder: `%bw1058_stats_gamesplayed%`

## Players In Game
Get current players (playing) count.

Placeholder: `%bw1058_current_playing%`

## Arenas Count
Get total arenas count.

Placeholder: `%bw1058_current_arenas%`

## Player Team
This returns the player's team if a he is a player. [SPECTATOR] if he is a spectator or an empty string if he is not in an arena. [SHOUT] if is a /shout or !message.

Placeholder: `%bw1058_player_team%`

## Player Status
This return's the player's status. Meant for conditional placeholders

<details><summary>Values</summary>

`NONE` - The player is not in an arena at all<br/>
`WAITING` - The player is in a waiting lobby, waiting for the game to start<br/>
`PLAYING` - The player is playing (not spectating)<br/>
`SPECTATING` - The player is spectating

</details>

Placeholder: `%bw1058_player_status%`

## Arena Status
This returns arena display status based on the server's default language. Since BedWars1058 v0.8.5beta.
Will return "Restarting" if the arena is offline or if it does not exist.

Placeholder: `%bw1058_arena_status_[arenaName]%`

## Arena Player Count
This returns arena player count. Since BedWars1058 v0.8.5beta. Replace `[arenaName]` with the arena name.

**It also supports + operator:** %bw1058_arena_count_arena1+arena2%

Placeholder: `%bw1058_arena_count_[arenaName]%`

## Arena Group Count
Get the total players amount in a group. Replace `[groupName]` with its name.

**It also supports + operator:** %bw1058_group_count_group1+group2%

Placeholder: `%bw1058_group_count_[groupName]%`

## Get Current Arena Group
Get the group of the arena you're playing on.

Placeholder: `%bw1058_current_arena_group%`

## Get an Arena Group
Get the group of the given arena.

Placeholder: `%bw1058_arena_group_[arena]%`

## Elapsed Time
Get game elapsed time.

Placeholder: `%bw1058_elapsed_time%`
