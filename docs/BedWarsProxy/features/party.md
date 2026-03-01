---
title: Parties
sidebar_label: Party
sidebar_position: 2.6
---
BedWarsProxy includes an internal party system and also supports external party plugins.

### Internal Party System
If no supported external party plugin is found, BedWarsProxy will load its internal party system. This allows players to create parties and join arenas together.

#### Commands

| Command | Description | Permission |
|---------|-------------|------------|
| `/party invite <player>` | Invite a player to your party. | - |
| `/party accept <player>` | Accept a party invitation. | - |
| `/party leave` | Leave your current party. | - |
| `/party disband` | Disband your party (owner only). | - |
| `/party remove <player>` | Remove a player from your party (owner only). | - |

### Supported External Plugins
BedWarsProxy supports sending players in the following party plugins:
- [Parties](https://www.spigotmc.org/resources/parties-an-advanced-parties-manager.3709/) by AlessioDP
- Party and Friends Extended Edition for BungeeCord by Simonsator
- Party and Friends for Spigot by Simonsator
