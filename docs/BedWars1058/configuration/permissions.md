---
sidebar_label: Commands and Permissions
title: Commands and Permissions
sidebar_position: 3.1
---
**Commands and Permission**

| Command                  |                                             Description                                              |    Permission |
|--------------------------|:----------------------------------------------------------------------------------------------------:|--------------:|
| all cmds                 |                                      Give acces to all commands                                      |          bw.* |
| /rejoin                  |                                  Rejoin an arena if you got kicked.                                  |     bw.rejoin |
| /leave                   |                                Leave the arena or the bedwars server.                                |             - |
| /party                   |                                         All party commands.                                          |             - |
| /shout                   |                             Send a global message on a solo/ team arena.                             |      bw.shout |
| !message                 |                             Send a global message on a solo/ team arena.                             |      bw.shout |
| /bw                      |                                         View commands list.                                          |             - |
| /bw gui                  |                     Opens the arena selector gui. Not available in BUNGEE mode.                      |             - |
| /bw gui [group]          |           Opens the arena selector gui for the given group. Not available in BUNGEE mode.            |             - |
| /bw gui [group1+group2]  |                          Opens the arena selector gui for the given groups.                          |             - |
| /bw join                 |                                            Join an arena.                                            |             - |
| /bw random               |                                         Join a random arena.                                         |             - |
| /bw join [groupName]     |                                     Join an arena by group name.                                     |             - |
| /bw join [group1+group2] |                        Join the first available arena from the given groups.                         |             - |
| /bw join [arenaName]     |                   Join an arena by given name. This won't work with display name.                    |             - |
| /bw lang                 |                Change your BedWars language (messages, scoreboards, guis, holograms).                |             - |
| /bw leave                |                                Leave an arena or the BedWars server .                                |             - |
| /bw cmds                 |                                       View the commands list .                                       |             - |
| /bw start                |                            Forcestart an arena based on some conditions.                             | bw.forcestart |
| /bw start debug          |                         Forcestart an arena. Can start with a single player.                         |   requires OP |
| /bw stats                |                                       View your BedWars stats.                                       |             - |
| /bw teleporter           |                           Opens the teleporter gui if you are a spectator.                           |             - |
| /bw tp [username]        |                   Teleport to a bedwars player. Used by staff to verify cheaters.                    |         bw.tp |
| /bw arenaGroup           |                                         Manage arena groups.                                         |     bw.groups |
| /bw arenaList            |                                        View the arenas list.                                         |             - |
| /bw build                |                                    Allows to build in the lobby.                                     |      bw.build |
| /bw cloneArena           |                                       Clone an existing arena.                                       |      bw.clone |
| /bw delArena             |                                      Delete an existing arena.                                       |     bw.delete |
| /bw disableArena         |                                          Disable an arena.                                           |    bw.disable |
| /bw enableArena          |                                           Enable an arena.                                           |     bw.enable |
| /bw npc                  |                           Manage Join NPCs. This requires Citizens Plugin.                           |        bw.npc |
| /bw reload               |                                       Reload BedWars messages.                                       |     bw.reload |
| /bw setLobby             |                   Set the BedWars main lobby. This is not required in BUNGEE mode.                   |      bw.setup |
| /bw setupArena           |                                   Create or edit a BedWars arena.                                    |      bw.setup |
| /bw setWaitingSpawn      |                                 Set the waiting spawn for an arena.                                  |      bw.setup |
| /bw setSpectSpawn        |                                    Set spectators waiting spawn.                                     |      bw.setup |
| /bw setSpawn             |                                      Set the spawn for a team.                                       |      bw.setup |
| /bw addGenerator         |                            Add a Iron/ Gold/ Emerald/ Diamond generator.                             |      bw.setup |
| /bw removeGenerator      |                             Remove a generator when you are next to it.                              |      bw.setup |
| /bw autoCreateTeams      |                                   Auto create teams for an arena.                                    |      bw.setup |
| /bw createTeam           |                                     Create a team for an arena.                                      |      bw.setup |
| /bw removeTeam           |                                     Remove a team from an arena.                                     |      bw.setup |
| /bw setBed               |                                        Set a bed for a team.                                         |      bw.setup |
| /bw setMaxInTeam         |                                          Set the team size.                                          |      bw.setup |
| /bw setShop              |                                  Set the shop location for a team.                                   |      bw.setup |
| /bw setType              |                      Set the arena type. Available in Assisted setup. Optional.                      |      bw.setup |
| /bw setUpgrade           |                                 Set the upgrade location for a team.                                 |      bw.setup |
| /bw waitingPos           | Set the pos1 and pos2 like a world edit selection so the lobby will be removed when the game begins. |      bw.setup |
| /bw setKillDrops         |                     Set the location where to drop items when killing an enemy.                      |      bw.setup |
| /bw save                 |                               Save setup changes and go back to lobby.                               |      bw.setup |
| /bw level                |                                   Change a player level. Give xp.                                    |      bw.level |
| /bw upgradesmenu         |                    Opens the team upgrades menu if the player is close to the NPC                    |             - |

**Other features**

| Feature        |                      Description                      |      Permission |
|----------------|:-----------------------------------------------------:|----------------:|
| Vip Kick       | Join a full arena by kicking a random player from it. |          bw.vip |
| Chat Color     |             Allows to use colors on chat.             |    bw.chatcolor |
| Cmd Bypass     |    Allows to use non whitelitest commands in game.    |   bw.cmd.bypass |
| Shout Cooldown |                 Skip shout cooldown.                  | bw.shout.bypass |
| Setup join     |    Join a BUNGEE mode (autoscale) server directly.    |        bw.setup |