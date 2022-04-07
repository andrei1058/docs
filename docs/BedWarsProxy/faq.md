---
title: Frequently asked questions
sidebar_label: FAQ
sidebar_position: 2
descriptions: Common issues and fixes for BedWarsProxy
---
Common issues and fixes for BedWarsProxy


## My arenas dont show up in `/bw gui`!

Firstly, make sure you've followed the [setup instructions](/docs/BedWarsProxy/getting-started).

If you have, theres a few things to check
1. Make sure the BedWarsProxy port you chose is not taken by anything else
   1. There should not be any server or other service running on that port
2. Make sure you set the ip and port in `lobby-sockets` correctly
   1. The ip should probably be the same one used in the bungee config
   2. The port must be the `port` from the BedWarsProxy config
3. Make sure the BedWarsProxy port is accessable to the bedwars servers
   1. Make sure it is allowed through any firewalls
   2. If you are on a host, you might have to ask your host to add the port to your server
   3. If you are running on pterodactyl, you'll need to add an "allocation" for the bedwarsproxy port.
      If you host the pterodactyl node yourself, you can do this from the admin panel.
      Otherwise, you will need to contact the node admin about it (e.g. if youre on a host that uses pterodactyl)

## My arenas show up, but when I try to join one, nothing happens!
Usually this happens if you didnt put the correct `server-id` in the BedWars1058 config.

The `server-id` should be the name of the arena server as if you were using `/server`

So if you do `/server <server-id>` (where you replace `<server-id>` with what you put in the `server-id` option in the config)
it would take you to the arena server.

## When I try to join an arena, it says I need to use BedWarsProxy to join, but I am!

First, make sure you were using BedWarsProxy's `/bw gui` or `/bw join` and not sending a player to the server manually

If you are using the correct commands, then make sure that `bungeecord` is set to `true` in `spigot.yml` on all servers (lobby and arenas)

## Sometimes when I join an arena, it kicks me saying `Restarting`

This could be because you took to long to log in, so timed out for joining the arena.

To fix this, increase the `bwp-timeout` option in the bedwars1058 config. It's in miliseconds, so 1000 = 1 second.
The default is 5000, so 5 seconds.