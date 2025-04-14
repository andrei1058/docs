---
sidebar_label: Main Config
title: Main Config
sidebar_position: 3.2
---
This page contains the documentation about the `config.yml` file located in `plugins/BedWars1058`.

Make sure you're using the right material name when changing item materials in config.

For a list of materials, sounds, and potions, check the [resources page](../resources)

```yaml
# There are 4 choices for this option:
# 1. MULTIARENA it means that you can run multiple arenas on a single paper/spigot server instance.
# 2. SHARED it means that you can run multiple arenas on a single paper/spigot server instance 
#   which have other minigames on it. Lobby world is not protected by BedWars1058 in this case.
# 3. BUNGEE allows you to run multiple arenas on a single server and to keep them connected to an external
# lobby. When a game starts the arena is cloned (auto-scale) in order to have always free arenas.
# 4. BUNGEE_LEGACY it means that you can run a single arena on a paper/single spigot server.
#   When you join the server it will add you to the arena. Server motd is changed based on the arena status.
serverType: MULTIARENA

# This is used as default language for your BedWars server.
# It is "language: en" by default. It means that English is the default message for your server and it takes
# messages from "plugins/BedWars1058/Languages/messages_en.yml".
# You can add your own language to the server by creating a new `yml` file.
# Let's suppose you want to add the Romanian language. Create a new file called "messages_ro.yml",
# copy the messages from "messages_en.yml" and then translate them.
# If you want to set Romanian as the default server language set this option to "language: ro".
# Players can do "/bw lang en" to receive messages, GUIs and holograms in their preferred language.
# This won't affect the others players.
language: en

# This is the place where you can put your donation link.
# When players try to join full arenas they'll receive a message saying that they can donate for VIP KICK
# permission in order to join full arenas and this link will be opened in browser if they click on the message.
storeLink: https://donation.link

# This is the server connected to your bungee network where players are teleported at the end of the game if
# serverType is set to BUNGEE. It is also used for the "Back to lobby" item in serverType MULTIARENA.
lobbyServer: hub

# Set this option to true if you want the chat to be global.
# Players from arenas and from the lobby will see all messages. Spectator messages are excluded.
globalChat: false

#Se this option to true if you want BedWars1058 to manage the chat format.
formatChat: true

# Set this to true in order to receive debug messages in the console.
# This option is usually used by the developer in order to detect issues in the plugin.
#debug: false

# Rich scoreboard configuration.
scoreboard-settings:
  # Sidebar configuration. Right side scoreboard.
  sidebar:
    # Enable multi-arena lobby scoreboard
    enable-lobby-sidebar: true
    # Enable game scoreboard (waiting/starting/playing/restarting)
    enable-game-sidebar: true
    # Scoreboard title refresh interval.
    # Time in ticks. Set to 0 to disable.
    title-refresh-interval: 2
    # Scoreboard placeholders refresh interval
    # Time in ticks. Set to 0 to disable.
    # Refresh is still triggered when a bed is destroyed/ and a player/ team is eliminated.
    placeholders-refresh-interval: 20

  # Tab list options
  player-list:
    # Tab list formatting enable/ disable
    format-lobby-list: true
    format-waiting-list: true
    format-starting-list: true
    format-playing-list: true
    format-restarting-list: true
    # Tab list annimation refresh
    # Time in ticks. 0 to disable.
    names-refresh-interval: 100

  # In game health settings
  health:
    display-in-tab: true
    #Tab list annimation refresh
    # Time in ticks. 0 to disable.
    animation-refresh-interval: 80


# Party settings
party-settings:
  # Set this to true if you want to allow parties on the server so friends can join the same team.
  allow-parties: true
  # This will enable default /party command
  enable-party-cmd: true
  # Minimum required rank to choose an arena if using AlessioDP Parties
  alessioDP-choose-arena-rank: 10

# This configuration section contains settings only for BUNGEE serverType.
# Ignore this section if your server is not BUNGEE.
bungee-settings:
  # This value is a counter. After this amount of games played the server will be restarted to prevent lags.
  # Set to 1 for restarting arenas after every game.
  # Set to -1 or 0 to disable the arena restarting.
  # If you are using the arena as level-name with games-before-restart > 1 
  # it will create a void map and will use it as main world just because it is required
  # and Minecraft doesn't allow to unload the main world (required for world restore)
  games-before-restart: 30

  # This is the command executed at the end of the game when games-before-restart is reached.
  restart-cmd: restart
  
  # Don't touch this unless you know what you're doing.
  # This is the server name in bungeecord config.
  # Required to allow players to join in BUNGEE mode.
  server-id: bw1
  
  # Don't touch this unless you know what you're doing.
  # This is the lobby server ip + BedWarsProxy Plugin's port if you are using
  # it in your lobby server. The port it's not the server's port. It is the
  # port located in plugins/BedWarsProxy/config.yml
  lobby-servers:
  - 0.0.0.0:2019
  
  # Waiting time in milliseconds for a player to be moved from BedWarsProxy to a
  # remote game through bungee. If it takes longer than this the player will not be
  # added to the selected game.
  bwp-time-out: 5000

# This configuration section contains countdowns in seconds used for the gameplay.
countdowns:
  # The countdown in seconds for the game start when the minimum amount of players is reached.
  game-start-regular: 40

  # This countdown is used when the arena is half full
  game-start-half-arena: 25

  # This is the wait time before restarting the arena.
  # It is used reight before finding a winner.
  game-restart: 15

  # This countdown is used when the arena has reached the maximum amount of players and it should start faster.
  game-start-shortened: 10

  # This countdown will destroy the beds. It starts when all the generators are MAXED.
  next-event-beds-destroy: 360

  # This countdown starts when next-event-beds-destroy finishes. This will spawn dragons.
  next-event-dragon-spawn: 600

  # This countdown starts after next-event-dragon-spawn was finished. 
  # At the end the arena will be restarted.
  next-event-game-end: 120

# How often are players allowed to use /shoud, !shout or !message?
shout-cmd-cooldown: 30

# How long can a player stay disconnected before eliminate him. In seconds.
rejoin-time: 300

# How long to protect a player after he re-spawns. This will prevent others from
# killing him instantly at his spawn, but if the victim starts to hit others the
# protection will disappear. You should set this to at least 500 because it will
# protect the player from fall damage as well 
(because on some servers they get fall damage at re-spawn).
# Time in milliseconds.
re-spawn-invulnerability: 3000

# TNT Jump feature settings
tnt-jump-settings:
  barycenter-alteration-in-y: 0.5
  strength-reduction-constant: 3
  y-axis-reduction-constant: 2
  # damage -1 to disable custom damage
  damage-self: 1
  damage-teammates: 5
  damage-others: 10
# TNT ignition setting
tnt-prime-settings:
  auto-ignite: true
  fuse-ticks: 45  
# fireball jump feature
fireball:
  #fireball explosion dimension
  explosion-size: 3
  #fireball speed
  speed-multiplier: 10
  #enable or disable fireball fire
  make-fire: false
  knockback:
    horizontal: 1.0
    vertical: 0.65
  # fireball cooldown (time in seconds)
  cooldown: 0.5
  # damage -1 to disable custom damage
    self: 2.0
    enemy: 2.0
    teammates: 0.0

# Database settings
database:
  # Enable the MySQL database?
  # It will use SQLite if disabled.
  enable: false

  # Ip/ DNS of database.
  host: localhost

  # Port of database.
  port: 3306

  # Database name
  database: BedWars

  # Database user
  user: root
  
  # User password
  pass: bread

  # Secured connection
  ssl: false

# This is a list where you can add the languages that you aren't going to support
# on your server. Keep in mind that the language set at "language: x" option won't be
# disabled. To disable a language add its iso code to the list.
# The iso code is after the underscore: messages_en.yml -> iso: en
disabled-languages:
- ru
- es

# Set this to true if you want to disable those inventories.
# In lobby and in arenas.
inventories:
  disable-crafting-table: true
  disable-enchanting-table: true
  disable-furnace: true
  disable-brewing-stand: true
  disable-disable-anvil: true

# Options for a better performance
performance-settings:
  # Set this to false if you want to disable the generators rotation animation
  # This will disable some tasks to reduce CPU usage
  rotate-generators: true

  # Set this to true if you want to disable the packets used when a player respawns.
  # BedWars1058 uses them to fix possible invisibility issues.
  disable-respawn-packets: false

  # Set this to true if you want to disable the packets used to hide
  # the player armor when he drinks a invisibility potion.
  # Armor packets will be still used at respawn if disable-spawn-packets is set to false
  disable-armor-packets: false
  
  # Set this to true if you want to enable
  # Paper async teleport
  paper-features: true
  
  # heal pool particles
  heal-pool:
    # Set this to true if you want to enable
    # heal pool particles
    enable: true
    
    # Set this to true if you want to enable
    # heal pool particles only for your team
    seen-by-team-only: true
    
# Arena selector GUI settings
# Ignore this section if your serverType is BUNGEE
arena-gui:
  settings:
    # Arena selector gui slots
    inv-size: 27

    # Show arenas with playing status?
    show-playing: true
 
    # Slots where to put arenas
    use-slots: 10, 11, 12, 13, 14, 15, 16

  # Display item-stack for arenas with waiting status
  waiting:
    material: LIME_CONCRETE
    data: 5
    enchanted: false

  # Display item-stack for arenas with starting status
  starting:
    material: YELLOW_CONCRETE
    # Data values are ignored in 1.13+
    data: 4
    enchanted: false
 
  # Display item-stack for arenas with playing status
  playing:
    material: RED_CONCRETE
    # Data values are ignored in 1.13+
    data: 14
    enchanted: false

  # Item-stack added in empty slots of the GUI
  skipped-slot:
    material: BLACK_STAINED_GLASS_PANE
    # Data values are ignored in 1.13+
    data: 15
    enchanted: false


# Options related to player stats GUI
stats-gui:
  # Inventory size, slots
  inv-size: 27
  
  # Statistic name
  # You can add/ remove content with this structure to display your custom stats
  # Messages are located in BedWars1058/Languages/messages_en.yml
  # Restart your server to generate them paths (they will have "name not set" names)
  # Messages will be located at: stats-name-name, stats-name-lore
  # Example: for this case will be stats-wins-name
  # Available placeholders for stats {kills}, {deaths}, {losses}, {wins}, {finalKills}, {fKills}
  # {finalDeaths}, {gamesPlayed}, {firstPlay}, {lastPlay}, {player}
  # PlaceholderAPI IS ALSO SUPPORTED
  # Feel free to customize this GUI
  wins:
    material: DIAMOND
    # Data values are ignored in 1.13+
    data: 0
    # Where to put this in the stats GUI
    slot: 10
  
# This is a list of items that are given to the players when the game starts or when the player respawns.
# IMPORTANT:
# - The plugin will only give a sword if there are multiple swords in the list!
# - The plugin will only give a sword if the player doesn't already have one.
# in his inventory. The other items are given without checking any conditions.
start-items-per-group:
  #This is the the name of the arena group where to give the start items. If you don't know what is it, 
  # read about them https://wiki.andrei1058.dev/docs/BedWars1058/setup/arena-groups.
  # Arenas without an given arena group will receive items from "Default". Start items are unbreakable!
  Default:
  - WOODEN_SWORD

# This option is a list of commands that you can run while playing. Add your allowed commands on it.
# Look on the permissions page for the bypass permission.
allowed-commands:
- shout
- bw
- leave

# This section allows you to change the void-tp feature. With minecraft 1.17 and above they changed the void height to -64. 
# Here you can change the Y level the plugin checks to tp you back to spawn.
# You can also completely disable void-tp in the lobby.
lobby-settings:
  # Enable disable void TP.
  void-tp: true
  # Void Y level. If a player gets below this level they will tp to spawn.
  void-height: 0

# This configuration section contains options abut the items that you receive when you join the server.
# Ignore this configuration section if your serverType is BUNGEE.
# You can always remove or add new items under this category. They can execute commands.
lobby-items:
  example-item:
    # This command is executed when the player interacts with this item.
    command: bw gui
    material: CHEST
    # Data values are ignored in 1.13+
    data: 0
    # Where to put in player's inventory
    slot: 4

# This configuration section contains options abut the items that you receive when you join an arena.
# You can always remove or add new items under this category. They can execute commands.
pre-game-items:
  example-item:
    # This command is executed when the player interacts with this item.
    command: bw stats
    # This will automatically get the player's head texture
    material: PLAYER_HEAD
    data: 0
    # Where to put in player's inventory
    slot: 0

# This configuration section contains options abut the items that you receive when you are a spectator.
# You can always remove or add new items under this category. They can execute commands.
spectator-items:
  example-item:
    # This command is executed when the player interacts with this item.
    command: bw leave
   
    material: RED_BED
    # Data values are ignored in 1.13+
    data: 0
    # Where to put in player's inventory
    slot: 0

# Allow generator splitting between teammates
enable-gen-split: true
```
