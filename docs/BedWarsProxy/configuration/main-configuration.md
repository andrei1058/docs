---
sidebar_label: Main Config
title: Main Config
sidebar_position: 3.1
---
This page contains the documentation about the `config.yml` file located in `plugins/BedWarsProxy`.

```yaml
# The port that will be used to receive data from the arenas.
# This cannot be the same as the server's port.
port: 2019

# Default language for the plugin.
language: en

# List of disabled languages.
disabled-languages:
  - "your language iso here"

# Server IP used in placeholders.
server-ip: yourServer.com

# Link to your store, used in messages.
storeLink: https://www.spigotmc.org/resources/authors/39904/

# Whether to allow parties.
allow-parties: true

# Whether to enable the /party command.
enable-party-cmd: true

# Whether to use random arenas when joining.
randomArenas: true

# Database settings for syncing statistics.
database:
  enable: false
  host: localhost
  port: 3306
  database: bedWars
  user: root
  pass: ""
  ssl: false

# Level system settings.
levels-settings:
  # The format of the level name. {number} is replaced with the player's level.
  default-name: "&7[{number}✩] "
  # The symbol used in the progress bar.
  progress-bar-symbol: "■"
  # The color of the unlocked part of the progress bar.
  progress-bar-unlocked-color: "&b"
  # The color of the locked part of the progress bar.
  progress-bar-locked-color: "&7"
  # The overall format of the progress bar.
  progress-bar-format: "&8 [{progress}&8]"

# Arena selector GUI settings.
arena-gui:
  settings:
    # Size of the inventory.
    inv-size: 45
    # Whether to show arenas that are currently being played.
    show-playing: true
    # Slots where the arenas will be displayed.
    use-slots: 10,11,12,13,14,15,16,19,20,21,22,23,24,25,28,29,30,31,32,33,34
  
  # Material and data for different arena statuses.
  waiting:
    material: DIAMOND_BLOCK
    data: 0
    enchanted: false
  starting:
    material: GOLD_BLOCK
    data: 0
    enchanted: true
  playing:
    material: REDSTONE_BLOCK
    data: 0
    enchanted: false
  skipped-slot:
    material: BLACK_STAINED_GLASS_PANE
    data: 7
    enchanted: false
```
