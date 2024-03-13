---
sidebar_label: Creating Arenas
title: Creating Arenas
sidebar_position: 2.2
---
## Video tutorial

[![Video tutorial](https://img.youtube.com/vi/pPCa2Se-QSY/0.jpg)](https://youtube.com/watch?v=pPCa2Se-QSY&t "Tutorial")

## Step by step tutorial

1. Make sure you have the required permissions in order to use set-up commands. Type `op yourname` in console for that.
2. Now you can set the main lobby using `bw setLobby`. Now it will restart the server. Join again and continue this tutorial.
3. Now upload a map on your server, join it and let's set it. Start creating a map with `bw setupArena <worldName>`. Type the folder name in order to create an arena. The plugin will show you a gui letting you choose the way you want to do the set-up: **assisted** or **advanced**. The assisted mode is easier and faster and the advanced mode instead, provides more commands and takes longer to finish. **Use assisted and continue reading**. Multiverse plugin it's *not required*.
4.  Now set the waiting lobby, the place where players will be teleported when they join the arena. Type: `bw setWaitingSpawn`. It will now search for teams on current map based on colors. If you are satisfied of the found teams, just click on the chat message to auto-create them, else use `bw createTeam <name> <color>` to create them manually. Example: `bw createTeam Tutorial Blue` Your location doesn't matter when you type that command. Type `bw createTeam` to see a list of available colors. Teams are unlimited.
5. *(Optional)* If you want your waiting lobby to be removed when the game stars select it like a WorldGuard region using the following commands: `bw waitingPos 1` in the top right corner and `bw waitingPos 2` in the bottom left corner.
6. Now go on each island and type `bw setSpawn` without any team name provided because the plugin will auto-detect it.
7. Set the shop NPC for each island using `bw setShop` without any team name provided because the plugin will auto-detect it.
8. Set the upgrades NPC for each island using `bw setUpgrade` without any team name provided because the plugin will auto-detect it.
9. Now it's time to set iron and gold generators for each team. If you want to set the iron and gold generator at the same location, go on each island and type `bw addGenerator` without any others arguments. If you want to set them at different locations, just provide the generator name `bw setGenerator iron/gold`.
10. Now it's time to set the diamond and emerald generators. Use `bw addGenerator diamond` for creating a new diamond generator and `bw addGenerator emerald` for adding a new emerald generator.
11. One more command and it's done! Use `bw save` to save the world and exiti the setup mode.
12. If you want to play on your new map enable it using: `bw enableArena <mapName>`

## Important
Now that you've finished the setup read about [serverType](../configuration/main-configuration#servertype) in order to understand the way you can use the plugin on your server.
