---
sidebar_label: Joining arenas
title: How to join arenas
sidebar_position: 2.3
---
## About
There are different ways to join an arena:
*  via [command](how-to-join-arenas#join-command)
*  via [gui](how-to-join-arenas#join-gui)
*  via [npc](how-to-join-arenas#join-gui)
*  via [sign](how-to-join-arenas#join-signs)

## Join command
![join](/uploads/join.png)

You can join an arena using `bw join <arenaName>` if it is waiting/ starting. When you join an arena while is in-game status, you will be added as a spectator. You can also join a random arena via command using `bw join <groupName>`. Read about [arena groups](arena-groups). Example: `bw join Solo`. Use `bw join default` for arenas without a group.

## Join GUI
![arena-selector](/uploads/arena-selector.png)

You can join arenas via this item received when you join the server if it is `server-type: MULTIARENA`. You can open the arenas GUI also via command `/bw gui` or `/bw gui <groupName>` to open the gui for a specific [groups](arena-groups). You can't open the arenas GUI at all if your server is `server-type: BUNGEE` and via command only if `server-type: SHARED`. Read about server type [here](../configuration/main-configuration#servertype).

## Join NPCs
![Screenshot_1](/uploads/Screenshot_1.png)

BedWars1058 provides [Citizens](https://spigotmc.org/resources/13811/) support. You can join arenas by clicking on an NPC. More details about Citizens hook [here](citizens-hook).

## Join Signs
If you want to place a join sign, first of all you need to type `/bw build` in order to place blocks. Now you can place it and write on the first line `[bw]` and on the second line the name of the warena you want to join.

**Example:**
```
[bw]
Amazon
```
![c45a65a289796296cb91ea5186ed16392ff6e027](/uploads/c45a65a289796296cb91ea5186ed16392ff6e027.png)
