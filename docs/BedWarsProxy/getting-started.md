---
title: Getting Started
sidebar_position: 1
---

## Installation

BedWarsProxy is a plugin that can be installed on lobby/hub servers. Do not install it on arena servers.

:::info Note before we start

**BedWarsProxy only** goes on the lobby server(s)<br/>
**BedWars1058 only** goes on the arena server(s)

:::

1. Copy the BedWarsProxy.jar in the plugins folder for your lobby server and restart your server.
2. Open BedWarsProxy's config.yml and set your desired port that will be used to receive data from the arenas.
   * This **can not** be the same as the server's port (from server.properties)
   * Note that the port must be open, available, and accessable from your arena server(s)
3. Still in BedWarsProxy's config.yml, insert your database credentials to sync bed-wars statistics from arenas.
   * If you skip this step, BedWarsProxy will still function, however any stats you get from BedWarsProxy will be incorrect.
4. Restart the lobby server
5. Go on each BedWars arena server's files and open `plugins/BedWars1058/config.yml`.
   1. Add the lobby's ip and BedWarsProxy port under `lobby-sockets`.
   2. For example, if your lobby's ip is `51.77.158.119`,
      and the BedWarsProxy port you set in step 2 is `25569`, then this would be your config:<br/>![](/img/immagine.png)
   3. Next, change `server-id` to be the name of the server in your BungeeCord/Velocity config.
      In the example above, the server name in the BungeeCord config is `bw1`.
      1. An easy way to double-check that you set this correctly is to do `/server <server>`,
         replacing `<server>` with what you put in `server-id`
   4. Set the `serverType` to `BUNGEE`
   5. Restart the arena server
   6. Repeat steps i-v for each of your arena servers
6. Make sure you've restarted each of the servers (after configuring them), and enjoy!

## Usage
To open the arena selector, you can use `/bw gui`

BedWarsProxy does not have a built-in scoreboard, so you will need to use an external scoreboard plugin and the
[PlaceHolderAPI placeholders](features/placeholders) if you want a scoreboard.