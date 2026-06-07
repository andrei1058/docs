---
title: Plugin Installation
sidebar_position: 1
---

# Plugin Installation

Follow these steps to install SkyGiants1058 on your server.

### 1. Upload the Plugin
Drop the `SkyGiants1058.jar` file into your server's `plugins/` folder.

### 2. Initial Run
Start the server once to generate the default configuration files and folders.

### 3. Choose a Server Mode
Open `config.yml` and set the `server-mode` to one of the following:

- **NETWORK**: Choose this if your server acts as a node within a network (BungeeCord or Velocity).
  - In this setup, you can have multiple SkyGiants nodes connected to a proxy and a Redis instance.
  - On your lobby servers (remote servers on the same proxy), you will install the **SkyGiantsHub** plugin.
  - Because they are connected to the same Redis server, the system will automatically sync and display the arena list across all your lobbies, allowing players to choose their desired arena seamlessly.

- **MULTIARENA**: This is perfect for standalone servers or hybrid setups where everything happens on one instance. It can be used in two ways:
  - **Standalone Pre-Lobby**: You have a dedicated pre-lobby world (set in `server.properties`). When players join, they are teleported to a set location, given the game sidebar, and can choose which map to play.
  - **Hybrid/Mixed Server**: You run SkyGiants alongside other game modes like Creative or Survival on the same instance. In this case, you might use a plugin like Multiverse-Core to handle different worlds. 
    - You can have a dedicated SkyGiants pre-lobby world managed by Multiverse where players join via signs.
    - Alternatively, you can place SkyGiants signs or GUIs in a centralized hub.
    - **Note**: In this hybrid setup, it's often best to disable the pre-lobby scoreboard and `join-teleport` in the config so players aren't automatically sent to the SkyGiants lobby when they first join your server.

- **SMP (Survival Multiplayer)**: Best for servers that want to host SkyGiants as periodic events to keep things fresh.
  - You can schedule events at specific times and days to break the monotony of survival play.
  - You can even reward players with "Event Start" items in your server crates, giving them the power to trigger a SkyGiants match.

### 4. Configure Basic Settings
Check the [main configuration](../configuration/main-configuration.md) page for details on setting up rewards, leave handlers, and web events.

### 5. Create Arenas
Once the plugin is installed and configured, you can start [creating arenas](creating-arenas.md).
