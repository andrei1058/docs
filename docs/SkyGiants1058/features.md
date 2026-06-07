---
title: Features
sidebar_position: 1
---

# Features

SkyGiants1058 is a feature-rich minigame plugin designed for high performance and ease of use. Below is a detailed overview of its key features.

### Server Modes
SkyGiants1058 can be configured to run in different modes to suit your network's needs:
- **MULTIARENA**: Run multiple arenas on a single server instance. Players can join via signs or a GUI.
- **NETWORK (Bungee/Velocity)**: Dedicated arena servers that automatically handle player connection and server rotation.
- **SMP**: Integrates into a survival world where players can start matches in designated areas.

### Advanced In-game Setup
Setting up arenas is intuitive and requires no manual configuration file editing:
- **Context-Aware Tools**: Hotbar items automatically change based on your location (e.g., Team base tools appear when you enter a team's territory).
- **Region Visualization**: Uses particle effects to show arena boundaries, team regions, and Beast spawn areas in real-time.
- **Integrity Validation**: The `/sga validate` command checks for missing spawns, Giants, or settings before you save.

### Gameplay Mechanics
- **The Giants**: Each team must protect their Giant. As the Giant's health decreases, the team becomes more vulnerable.
- **The Beast**: A powerful boss that spawns in the center of the map. Defeating it grants significant rewards and buffs to the team.
- **Team Stores**: In-game NPCs where players can spend gold earned from kills and objectives to upgrade gear and abilities.
- **Dynamic Phase System**: Matches progress through Lobby, Warmup, Play, and Sudden Death phases, each with unique behaviors.

### Lobby Join Signs
Players can join arenas directly from your lobby using signs.

**Setup:**
1. Place a sign in the lobby world.
2. Write `[SkyGiants]` on the first line.
3. Write the `<arena-id>` on the second line.
4. Leave other lines empty.

The plugin will auto-update the sign with the arena status and player count every 5 seconds.

**Permissions:**
- `skygiants.admin` to register/place a sign.
- Only admins can place/break signs in the lobby world.

### Scoreboard & TabList
SkyGiants1058 features dynamic sidebars that change based on the game phase (Lobby, Warmup, Play, End).

**Placeholders:**
- `{money}`: Current gold.
- `{on}/{total}/{max}`: Player counts.
- `{phase}`: Current game phase.
- `{time}`: Remaining time.
- `{beastTime}`: Time until Beast spawns.

The TabList is also customized with team prefixes and spectator hiding. It also integrates with **PlaceholderAPI**.

### Achievements & Stats
Track player progress with a comprehensive stats system and reward achievements.

**Stats tracked:**
- Kills/Deaths/Assists
- Wins
- Beast Kills
- Giant Damage
- Gold Earned

**Achievements:**
- Daily, Weekly, and Monthly tiers.
- Rewards include gold (Vault), commands, or custom messages.

### Dynamic Localization
The plugin automatically adapts to the player's language.
- **Automatic Detection**: Detects the player's client language and switches automatically.
- **Refresh System**: When a player changes their language, the Sidebar, GUIs, and lobby items are automatically refreshed.
- **Customizable**: Messages are stored in `src/main/resources/languages/` and can be easily edited.

### Web Events & External Integration
For advanced networks, SkyGiants1058 can stream live game events to external services:
- **Redis & RabbitMQ**: Stream kills, wins, and game status changes to external dashboards or Discord bots.

### Performance & Compatibility
- **Arena Resets**: Lightweight and fast arena reset system.
- **Modern Versions**: Supports Spigot/Paper from 1.8.8 up to the latest versions.
- **Optimized**: Designed to handle large player counts with minimal impact on TPS.
