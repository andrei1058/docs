---
sidebar_label: FAQ
sidebar_position: 1.2
---
# Frequently Asked Questions

### How do I edit an existing arena?
Just do `/bw setupArena <name>`, and you'll be able to change settings without losing existing data.

### Why shop/ upgrades NPCs aren't spawning?
Make sure you have `spawn-npcs` set to `true` in `server.properties`. Also, if you have `WorldGuard` plugin, please remove any regions from BedWars arenas.

### I can't place blocks; why?
If you are not able to place blocks in some places, make sure it's not a BedWars rule. If it is normal not to be able to break, you will receive a message. In other cases, you might have `spawn-protection` activated, and it won't allow you to build at the map's spawn. In this case, please set `spawn-protection` to `0` in `server.properties`. If this didn't work, please make sure you didn't set the BedWars **main lobby** in the arena world, because it will prevent players from doing PVP, building etc.

### Why can't I PVP?
Please make sure you didn't set the BedWars **main lobby** in the arena world, because it will prevent players from doing PVP, building etc. If you're using `MultiVerse` Plugin, make sure not to have the `pvp` flag disabled. Same thing if you're using `WorldGuard` Plugin (it would be better if you removed any regions from BedWars arenas). If you don't have those plugins or if it didn't work, set `difficulty` higher than `0` in `server.properties` if you haven't already!

### My arenas don't reset, why?
Read about this [here](setup/creating-arenas#map-resetting-system)

### Why am I getting a Bedrock item from the shop?
If you are trying to buy an item from the shop but this item is invalid then a placeholder item will be given (Bedrock). Try looking in your server log for a message about an Invalid Item. Don't forget to turn on `debug:true` in the `config.yml` 

### Why are my holograms broken?
![img](https://i.imgur.com/IYzHdK6.jpg?1)
This is a client-side issue, it happens on modified clients (usually on 1.8.x).

### An error occurred while enabling BedWars1058, what does it mean?
In most cases, it means that you are running an unsupported version. Check [compatibility](compatibility#supported-versions).
When a message is displayed like ``this version of the Java Runtime only recognizes class file versions up to 52.0``, this means you are running an outdated version of Java. Update to a more recent version of Java, as described here: [Recommended Java Versions](compatibility#recommended-java-versions).
Note: If you are running a 1.8 server, you might have to disable use-native-transport in server.properties in order for the server to start.

### I am stuck at spawn when joining the lobby.
Since 1.17, Minecraft has changed the void height, and because of the void-tp feature in BedWars lobbies and arenas, it will check if your Y-level is smaller than 0. To change this, search for `lobby-settings` and change `void-height` to the appropriate level for your server version. You can also completely disable the void-tp feature.

### Discord
Couldn't find an answer? Join my <a href= "https://discord.gg/XdJfN2X"><img src="https://discordapp.com/api/guilds/201345265821679617/widget.png"/></a>
