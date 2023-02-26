---
sidebar_label: Language Config
title: Language Configuration
sidebar_position: 3.99
---
### Creating custom scoreboards
You can create custom scoreboards per [Arena Groups](https://wiki.andrei1058.dev/docs/BedWars1058/setup/arena-groups/). So, let's suppose you have an arena group called `4v4v4v4`, then you can create a custom scoreboard for the arenas using this arena group. You can edit the scoreboard for each arena state (waiting, starting, playing). So let's suppose you want to have a custom playing scoreboard. Just go in the language file, under the `scoreboard` section and add yur arena group name and under it, the arena status name:
```yaml
scoreboard:
  4v4v4v4:
    playing:
    - "&f&lBED WARS"
    - "&7{date}"
    - ""
    - "{TeamRedColor}&lB&f {TeamRedName}&f: {TeamRedStatus}"
    - "{TeamBlueColor}&lB&f {TeamBlueName}&f: {TeamBlueStatus}"
    - "{TeamGreenColor}&lG&f {TeamGreenName}&f: {TeamGreenStatus}"
    - "{TeamYellowColor}&lY &f{TeamYellowName}&f: {TeamYellowStatus}"
    - ""
    - "&6{server_ip}"
```

### Scoreboard placeholders

#### Team placeholers:
##### AKA "PLACEHOLDERS NOT WORKING"
Using team placeholders is easy. Let's suppose that you have a team called `Bread`, then your team's placeholders are:
- `{TeamBreadColor}` - shows the team color.
- `{TeamBreadName}` - shows the team name.
- `{TeamBreadStatus}` - shows the team status. (alive, dead etc.)

A easier alternative is using `{team}` placeholder which will take the team format from the message at path: `format-sb-team-generic` (by default {TeamColor}{TeamLetter}&f {TeamName}: {TeamStatus}). This placeholder can be used in multiple lines and it will iterate the team list of the arena and will asign it a team. When the placeholder is used more than team list size the scoreboard line with {team} in it will be skipped.

##### Upgrade placeholders:
Upgrades are divided in tiers each upgrade will have a corresponding line containing the cost and currency and the tier color, this makes the tier show up as purchased or not. 
All variables mentioned below are gathered from `upgrades2.yml`.
- `{tier_x_color}` - changes the color based on purchased or not.
- `{tier_x_cost}` - shows the cost of the upgrade.
- `{tier_x_currency}` - shows the currency used to buy the upgrade.

When adding a tier to `upgrades2.yml` you should add another line in each of the language files used. and replace the `x` with the corresponding tier number.

##### Global placeholders:
- `{date}` - shows the date with the player's date format taken from his language file.
- `{level}` - shows the player level. Does not auto-refresh.
- `{levelUnformated}` - shows the plain player level without formatting. Does not auto-refresh.
- `{currentXp}` - shows the player's current xp. Does not auto-refresh.
- `{requiredXp}` - shows the required xp to rankup. Does not auto-refresh.
- `{progress}` - shows the progress bar. Does not auto-refresh.
- `{losses}` - shows the player's losses. Does not auto-refresh.
- `{kills}` - shows the player's total kills (when not used in game). Does not auto-refresh.
- `{player}` - shows the player name.
- `{deaths}` - shows the player's total deaths (when not used in game). Does not auto-refresh.
- `{coins}` - shows the player's money (Vault).
- `{finalKills}` - show player's total final kills (when not used in game). Does not auto-refresh.
- `{finalDeaths}` - show player's total final deaths (when not used in game). Does not auto-refresh.
- `{bedsDestroyed}` - show total beds destroyed by player (when not used in game). Does not auto-refresh.
- `{wins}` - show the number of games won by player.
- `{on}` - show the number of players on the server (when not used in game).
- `{server_ip}` - shows the server IP taken from config.yml.
- `{server}` - shows the server MOTD from server.properties
- `{version}` - shows the plugin version.

##### In Game placeholders:
- `{deaths}` - shows the player's deaths in current game (when used in game).
- `{kills}` - shows the player's kills in current game (when used in game).
- `{finalKills}` - show player's final kills in current game (when used in game).
- `{beds}` - show beds destroyed by player in current game (when used in game).
- `{on}` - show the number of players in current game (when used in game).
- `{map}` - shows the map name of the current arena.
- `{max}` - shows the slots of the current arena.
- `{time}` - shows the time remaining before the arena starts.
- `{nextEvent}` - shows the Next Event of the game (Generator upgrades, Beds destroy etc.).
- `{time}` - shows the time when the Next Event will happen.
- `{group}` - shows the arena group in the waiting lobby.
- `{map_name}` - the map you're playing on (for arena display name use {map}).

##### Kill/Bed-Destroy Message placeholders:
- `{PlayerColor}` - shows the player's team color.
- `{PlayerName}` - shows the name of the player .
- `{PlayerNameUnformatted}` - shows the name of the player without formatting.
- `{KillerColor}` - shows the color of the killer's team.
- `{PlayerTeamName}` - shows the name of the player's team.
- `{KillerName}` - shows the name of the killer.
- `{KillerNameUnformatted}` - shows the name of the killer without formatting.
- `{KillerTeamName}` - shows the name of the killer's team.


### Animations and timers
For more configuration options check the [config.yml](main-configuration) wiki.


Custom title/ sub-title for arena countdown
---------
You can add a custom title for certain second by adding this to the language file `arena-start-countdown-title-[second]` where `[second]` can be 4 etc. For adding a custom subTitle use this path: `arena-start-countdown-subtitle-[second]`. Available placeholder: `{second}`.

Countdown titles and subtitles are shown when the current second is `currentSecond % 10 == 0 || currentSecond <= 5`.
