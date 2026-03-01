---
title: Placeholders
sidebar_position: 1
---

### Common placeholders PAPI
- `player_count_global`, `spectator_count_global`, `online_count_global` (Total users playing or spectating from all arenas).
- `arena_count_global`.
- `player_count_game_TAG`, `spectator_count_game_TAG`, `user_count_game_TAG`.
- `game_state_TAG` (translated in player's language).

### Stats GUIs
- `{first_play}`, `{last_play}`, `{games_played}`.

### Teleporter/Exclusion GUI
- `{player}`: holder display name, `{player_raw}`: holder raw name, `{player_uuid}`: holder uuid.
- `{target}`: display name, `{target_raw}`: raw name, `{target_uuid}`: target uuid.
- `{time}`: countdown vote ends.

### Arena Display
- `{name}`: arena display name, `{template}`: arena template name, `{status}`: game state, `{on}`: current players, `{max}`: player limit, `{spectating}`: players spectating, `{game_tag}`, `{game_id}`.

### Scoreboard
- All arena display placeholders.
- `{date}`, `{server_name}`, `{countdown}`.
- `{tasks_long}`, `{tasks_short}`, `{tasks_common}`, `{tasks_visual}`.
- `{task_name}`, `{task_stage}`, `{stage_stages}`.
