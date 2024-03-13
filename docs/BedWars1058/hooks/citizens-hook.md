---
sidebar_label: Citizens Support
title: Citizens Support
sidebar_position: 3.4
---
**BedWars1058** is providing [Citizens](https://spigotmc.org/resources/13811/) support since version 0.6.4 beta (API 8). By installing it on your server you will have a new sub-command to the bedwars plugin, `/bw npc` for creating/ removing join-NPCs. Make sure you have installed the correct version of Citizens compatible with your server. In order to have this command listed at `/bw`.

**Note: Citizens is a paid plugin on SpigotMC. But you can get the free version of it in the [Citizens Jenkins](https://ci.citizensnpcs.co/job/Citizens2/) Website.**

# Video tutorial

[![Video tutorial](https://img.youtube.com/vi/6aluXVNN--Q/0.jpg)](https://youtube.com/watch?v=6aluXVNN--Q "Tutorial")

# Creating a NPC
Join your server and use the following command `/bw npc create <skinName> <groupName> <Line1>\n<Line2>`

Availalble placeholders: `{players}` - shows the players amount on this [arena group](https://wiki.andrei1058.dev/docs/BedWars1058/setup/arena-groups/).

**Example:** `/bw npc create andrei1058 Solo &9&lSolo Games\n{players} playing`
![2018-09-02_03.07.28](/uploads/2018-09-02_03.07.28.png)

# Removing a NPC
In order to remove a join-NPCs, just look at it and type `/bw npc remove`. You can also remove it using the Citizens command: `/npc remove`.
