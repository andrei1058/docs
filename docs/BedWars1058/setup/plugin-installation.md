---
sidebar_label: Plugin Installation
title: Plugin Installation
sidebar_position: 2.1
---
Installing plugins is easy. 

Download the [BedWars1058](https://modrinth.com/plugin/bedwars1058) file and put it on your `plugins` folder. It is located in the server's folder. Now start the server or restart it if it's already started, and that's it. If you want to continue with setting it up, [click here](creating-arenas.md) for a tutorial. In any case if you need help with configuration files check on the sidebar.

## How does the map reset system work?
BedWars1058 comes with its own map reset system. It is designed to be lightweight and fast. 
When an arena is saved, the plugin takes a backup of the world folder. When the game ends, it restores the world from that backup.

**Important:** 
- Do not use other map reset plugins alongside BedWars1058 as they might conflict.
- Make sure the server has enough permissions to delete and copy folders.
- For a better performance and faster resets, please read about [SlimeWorldManager Support](../hooks/swm-hook.md).