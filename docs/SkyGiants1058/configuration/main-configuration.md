---
title: Main Configuration
sidebar_position: 1
---

# Main Configuration

This page covers the primary configuration options available in `config.yml`. For message customization, scoreboards, and localization, see the [Language Configuration](language-configuration.md) page.

### Database & Redis
Configuration for data persistence and cross-server synchronization.

```yaml
# Database settings for stats and data persistence.
database:
  type: SQLITE # SQLITE or MYSQL
  host: localhost
  port: 3306
  database: skygiants
  user: root
  password: ""
  ssl: false

# Redis settings for cross-server synchronization (NETWORK mode).
redis:
  enabled: false
  host: localhost
  port: 6379
  password: ""
```

### Server Mode
Set the operating mode for the plugin. See the [installation guide](../setup/plugin-installation.md) for more details.

```yaml
# MULTIARENA | NETWORK | SMP
server-mode: MULTIARENA

multiarena:
  # Location where players are teleported when joining the server (if join-teleport is enabled)
  lobby-location: world,0.5,80.0,0.5,180.0,0.0

smp:
  enabled: false
  # Worlds where players can start matches
  worlds:
    - world
  # Location where players are teleported when joining an SMP match
  lobby-location: world,0.5,80.0,0.5,180.0,0.0
```

### Lobby Settings
Configure how the lobby behaves in MULTIARENA mode.

```yaml
lobby-settings:
  # Whether to teleport players to the lobby on join
  join-teleport: true
  # Whether to show the sidebar in the pre-game lobby
  enable-lobby-sidebar: true
  # Protection settings
  protect-lobby: true
  void-teleport: true
  # Command to execute when a player types /shout
  shout-cmd-cooldown: 10
```

### Scoreboard
Settings for the in-game scoreboard. Note that the actual content (lines) is configured in the language files.

```yaml
scoreboard-settings:
  sidebar:
    enabled: true
    # Update interval in ticks (20 ticks = 1 second)
    update-interval: 20
```

### Rewards
Configure gold rewards for various in-game actions.

```yaml
rewards:
  kill-player: 10
  kill-beast: 100
  damage-giant: 5
  win-game: 50
```

### Web Events
SkyGiants1058 can stream game events to Redis or RabbitMQ for external integrations.

```yaml
web-events:
  enabled: true
  type: REDIS # or RABBITMQ
  redis:
    host: localhost
    port: 6379
    password: ""
    channel: skygiants_events
  rabbitmq:
    host: localhost
    port: 5672
    user: guest
    password: guest
    exchange: skygiants_events
    routing-key: game.event
```

### Game Items
Items given to players at different stages of the game. These items can be further customized (names, lore) in the language files.

```yaml
lobby-items:
  arena-selector:
    material: COMPASS
    slot: 0
  leave-item:
    material: BED
    slot: 8

pre-game-items:
  team-selector:
    material: WOOL
    slot: 0

spectator-items:
  teleporter:
    material: COMPASS
    slot: 0
  leave-item:
    material: REDSTONE_COMPARATOR
    slot: 8
```

### Arena Selector GUI
Settings for the arena selector inventory.

```yaml
arena-gui:
  settings:
    # Size of the inventory
    inv-size: 45
    # Whether to show arenas that are already in progress
    show-playing: true
    # Slots where arena icons will be placed
    use-slots: 10,11,12,13,14,15,16,19,20,21,22,23,24,25,28,29,30,31,32,33,34
```

### Stats GUI
Configuration for the player statistics inventory.

```yaml
stats-gui:
  enabled: true
  inv-size: 27
```

### Achievements
Configure rewards for reaching certain milestones.

```yaml
achievements:
  enabled: true
  # Reward commands to execute when an achievement is reached
  # {player} is replaced with the player's name
  rewards:
    - "money give {player} 100"
    - "broadcast &6{player} &7has reached a new achievement!"
```

### Leave Handler
Define what happens when a player leaves a game. This can be configured differently based on your server setup.

```yaml
# Options: WORLD, BUNGEE, PREVIOUS_LOCATION
leave-type: WORLD 

# The name of the world players will be teleported to if leave-type is set to WORLD.
leave-world: world
```

#### Leave Types Explained
- **WORLD**: Players will be teleported to the world specified in `leave-world`. This is the most common setting for MULTIARENA and SMP modes.
- **BUNGEE**: Players will be sent back to your network's hub/lobby server. Ensure you have a fallback server configured in your proxy (BungeeCord or Velocity).
- **PREVIOUS_LOCATION**: Players will be teleported back to the exact location they were at before joining the match. This is ideal for SMP servers or hybrid setups where players join games from different worlds.
