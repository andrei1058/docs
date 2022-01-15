**BedWars1058** is providing [Citizens](https://www.spigotmc.org/resources/citizens.13811/) support since version 0.6.4beta (API 8). By installing it on your server you will have a new sub-command to the bedwars plugin, `/bw npc` for creating/ removing join-NPCs. Make sure you have instaled the correct version of Citizens compatible with your server in order to have this command listed at `/bw`.

# Video tutorial

[![Video tutorial](https://img.youtube.com/vi/6aluXVNN--Q/0.jpg)](https://www.youtube.com/watch?v=6aluXVNN--Q "Tutorial")

# Creating a NPC
Join your server and use the following command `/bw npc create <skinName> <groupName> <Line1>\n<Line2>`

Availalble placeholders: `{players}` - shows the players amount on this [arena group](arena-groups).

**Example:** `/bw npc create andrei1058 Solo &9&lSolo Games\n{players} playing`
![2018-09-02_03.07.28](/uploads/2018-09-02_03.07.28.png)

# Removing a NPC
In order to remove a join-NPCs, just look at it and type `/bw npc remove`. You can also remove it using the Citizens command: `/npc remove`.
