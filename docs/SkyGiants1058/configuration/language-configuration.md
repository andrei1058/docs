---
title: Language Configuration
sidebar_position: 2
---

# Language Configuration

SkyGiants1058 features a dynamic localization system that automatically adapts to the player's client language.

### Localization Files
All messages, GUI titles, item names, and scoreboard lines are stored in the `plugins/SkyGiants1058/Languages/` folder.
By default, the plugin generates `messages_en.yml`.

### Automatic Language Detection
The plugin detects the player's client language and switches to the corresponding translation file if it exists. If a translation is missing for a specific language, it will fall back to the default language.

### Customizing the Scoreboard
The scoreboard lines are defined in the language files. You can customize the title and the lines for each game phase (Lobby, Warmup, Play, End).

Example (in `messages_en.yml`):
```yaml
scoreboard:
  lobby:
    title: "&6&lSKYGIANTS"
    lines:
    - "&7{date}"
    - ""
    - "&fPlayers: &a{on}/{max}"
    - "&fMap: &a{map}"
    - ""
    - "&eWaiting for players..."
  playing:
    title: "&6&lSKYGIANTS"
    lines:
    - "&7{date}"
    - ""
    - "&fTime: &a{time}"
    - "&fBeast in: &a{beastTime}"
    - ""
    - "&fGold: &6{money}"
```

### Item Customization
Item names and lore are also managed through the language files, keeping your `config.yml` clean and focused on technical settings.

### Placeholders
SkyGiants1058 supports a variety of placeholders for use in messages and scoreboards:
- `{money}`: Current gold.
- `{on}/{total}/{max}`: Player counts.
- `{phase}`: Current game phase.
- `{time}`: Remaining time.
- `{beastTime}`: Time until Beast spawns.
- `{map}`: Name of the current arena.
- `{date}`: Current date.
- `{player}`: Player's name.

The plugin also fully integrates with **PlaceholderAPI**.
