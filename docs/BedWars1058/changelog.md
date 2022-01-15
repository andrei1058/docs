# 21.1
- fixed potion color (I think it works only on 1.11+)
- when you hit someone invisible he will become completely visible now
- fixed issue where level xp goes negative
- fixed issue where name tag doesn't appear after getting hit when invisible
- fixed issue where spectators can open trapped chests

# 20.10

- added configurable re-spawn countdown in config.yml. Set it to 0 for instant re-spawn. #599
- fixed spectator location not being used properly.
- fixed issue where you fall at re-spawn, re-join, spectate on 1.8.8.
- fixed issue where you get kicked after invisibility potion
- fixed issue #388
- fixed issue #507
- fixed issue where you can't see teammates sometimes in waiting lobby
- fixed issue where spectators have 0hp in tab
- fixed issue where re-joining players have 0hp in tab
- fixed issue where players had hp in tab and bellow name in waiting lobby
- fixed issue where TAB does not get properly formatted if you disable animations
- fixed issue where TAB does not get formatted at all in lobby/ waiting/ starting

## For developers:  
Removed:  
- ShopHolo: You can edit shop holograms via ITeam#getShopHologram and ITeam#getUpgradesHologram  for now but they are going to be deprecated very soon.

Added:
- IArena#startReSpawnSession(player, countdown)
- IArena#getWaitingLocation
- IArena#getSpectatorLocation
- IArena#isProtected(loc)
- BedWars#Configs#getAddonsPath
- #getLangByIso and #getPlayerLang


# 20.7
- scoreboard remake (#394, #410, #354)
- fixed ArrayIndexOutOfBoundsException at bw arenagroup
- fixed Could not pass event AsyncPlayerChatEvent to BedWars1058
- fixed a party related issue where the arena could start with a single player
- added 1.16 support
- fixed issue where default (team) emerald generator is not working
- fixed issue where you could drop items in 1.13+
- fixed issue where final deaths were not counted
- added rich scoreboard configuration
- stats cache was reworked
- added countdowns.game-restart option
- decreased shop keepers spawn time
- fixed missing scoreboard at rejoin
- fixed NPE error when creating a void arena
- fixed issue #464, #446, #494 (1)
- fixed issues #427, #453, #446, #457, #424 (%bw1058_player_level_raw%), #475, #415
- fixed issue where players could drop items in lobby

# 20.3
- added Enhanced-SlimeWorldManager support
- fixed minor memory leak on CmdStats
- PAPI new placeholders (%bw1058_current_arena_group%, %bw1058_arena_group_[arena]%)
- added + operator support on bw npc add
- PAPI group_count now supports + operator (%bw1058_arena_count_group1+group2%)
- PAPI arena_count now supports + operator (%bw1058_arena_count_arena1+arena2%)
- PAPI arena_status will return Restarting when the arena cannot be fetched
- added + operator support on bw join command (bw join group1+group2)
- added + operator support on bw gui command (bw gui group1+group2)
- added possibility to join a BUNGEE server directly for setup via bw.setup perm
- added a message to let owners know if there is a re-spawn plugin interfering
- fixed scoreboard memory leaks
- fixed last hit memory leaks
- fixed SQLite memory leaks
- changed addGenerator command
- added setKillDropsLoc command
- placed blocks is now based on bukkit vector class, no longer world trace is kept
- added option to disable game scoreboard so you can use your own plugin etc.
- added spectator location option (bw setSpectatorSpawn)
- fixed tnt issue (loc 0.5 thing) reported by Gabriele C.
- fixed invisibility issues where invisible players (potion) cannot see players when they re-spawn on their islands
- improved levels configuration, now you can configure based on intervals, ex levels.5-10.name
- added player/team display name support in messages
- fixed sword pick-up issue
- improved arena selector compatibility with other GUI plugins
- fixed arena selector
- added more bStats metrics data
- added sign block status configuration for restarting stage
- fixed some issues related to setup session
- the old bungee mode is now BUNGEE-LEGACY
- added 1.15 support
- arenas are now clonned and enabled automatically (auto-scale in BUNGEE mode)
- team-upgrades was re-written and is now implementing a new shop
- added bw upgradesmenu cmd
- fixed internal reset adapter issues
- bw start command is now shown at /bw in waiting lobby
- added option to disable party command
- fixed issue where signs are not working
- fixed issue #397 - getDataFolder()
- fixed issue #385 (kill message)
- fixed attack speed issue for IronGolem and Silverfish
- added auto-scale option for serverType BUNGEE (this will automatically clone and enable arenas when needed)
- updated Parties (by AlessioDP) support

For Developers:
- team color api update
- new team upgrades api (the old one was removed)

# 19.11.1
- fixed issue where you can't open the shop after rejoin
- fixed issue where you are invisible after rejoin
- fixed issue where you couldn't spawn eggs/armor-stands outside arenas in MULTIARENA mode.
- fixed issue #364 where you can take glass from arena selector
- arena selector skipped slots have names now take from config "server-ip"
- fixed issue where maps were not saved after /bw save

# 19.11
- improved BedBug and DreamDefender AI
- fixed BedBug and DreamDefender name error on 1.13+
- fixed issue where you get adventure mode sometimes in arena
- fixed 1st person spectate in 1.8
- fixed invisibility issues, again
- fixed issue where spectators can interact with doors etc.
- dropped items from lobby removal are now removed
- re-spawning players are now protected from any damage
- removed player kill sound
- all sounds are now optional. leave them empty in config to disable them
- you can now configure countdown sounds between [5;1]
- added game start sound
- added arena join allowed/ denied sounds
- added spectate allowed/ denied sounds
- added rejoin allowed/ denied sounds
- added spectator GUI click sound
- added game end sound
- next events have configurable sounds now
- added re-spawn sounds
- added arena selector open sound
- added stats GUI open sound
- fixed "against TNT" default message color
- fixed issue where map changes were when closing the setup session
- fixed fall damage after re-spawn
- teams have now configurable display names in each language file

# 19.10
- fixed issue where you get npe after closing setup session if you didn't set the main lobby location in multi-arena mode
- fixed issue #356 where you get a NPE when using SWM
- implemented feature request #344 (shout cooldown bypass)
- lobby world is no longer protected in shared mode. related to issue #347

# 19.9
- fixed Levels API NPE #348
- added MySQL connection ping task to avoid timeout (once an hour)
- added new update checker
- fixed pary issue #340
- fixed issue #309 xp resetting
- fixed database issue #284
- fixed ghost players issue #307
- invisibility potion improvements #308
- /bw level will now refresh the scoreboard after changing data

# 0.14.2.beta
- fixed Arena#getDisplayName npe
- fixed issue where arena default configuration was not being created

For Developers:
- added NextEventChangeEvent
- added new methods to the Level interface

# 0.14beta
IMPORTANT NOTICE FOR SERVER OWNERS:
With this update most of BedWars1058 Addons won't work anymore. Please update them.
As I usually do, the upgrade from older versions is done automatically by me, I work a lot to make your life easier.

- **added SlimeWorldManager support** a way faster to restore maps
- minor multi server version compatibility improvements
- removed 1.9 R1 support
- fixed issue where current tier was taking the price from next tier (shop related)
- fixed vault support at shop
- fixed issue where "cannot afford" lore msg was shown before "maxed" event if it was maxed (shop related)
- fixed issue where Status Block was not working and causing issues on 1.14
- removed FAWE support (added in 0.13beta)
- fixed some memory leaks
- removed deprecated LeaderHeads support (You can still use LH with PAPI)
- fixed ConcurrentModificationException caused probably when a player gets disconnected when the game starts
- fixed issue where beds doesn't get colored with the team color
- added config option to disable plugin packets (you can find then under the performance category)
- added default game rules per arena in config
- restart time was shortened
- default world restore was improved. Should fix freezes.
- you can now create empty maps by using /bw setupArena and paste your own schematic

For developers:

New API
A lot of packages were renamed. Sorry but I'm trying to bring the plugin to a stable version.
- fixed title and subtitle not working at SpectatorFirstPersonLeaveEvent
- added ArenaRestartEvent, SetupSessionStartEvent and SetupSessionCloseEvent

for devs:
- New API version: 14
- If you are using nms methods from BedWars1058 on your Addons you need to update them. Package has changed.

# 0.13beta
- fixed a null pointer exception error
- fixed rejoin scoreboard issue
- added /bw tp command
- prevent negative xp patch
- {player} placeholder stands for display name now, on chat
- player will no longer receive permanent items at final kills
- invisibility potion system was improved
- fixed issue where PlayerLevelUp was not called
- fixed anti afk system
- added request #287
- fixed fly issue as spectator  on 1.8 servers
- fixed fly bug after spectating
- fixed issue #269
- fixed issue #272
- item attributes are now hidden in stats gui
- fixed issue #282 about levels delay
- fixed issue #292
- fixed issue #294
- fixed issue #293
- added color support for glass pane at bedwars teams
- fixed issue with infinite items when using off hand
- fixed glass color for 1.12-
- "/bw start debug" now starts the debug mode
- added default sword restore system
- scoreboards updated with the new layout

for devs:
- EnemyBaseEnterEvent was removed, alternative: BaseEnterEvent (since api 9)
- EnemyBaseLeaveEvent was removed, alternative: BaseLeaveEvent (since api 9)
- #sendDefaultInventory improvements
- fixed PlayerJoinArenaEvent called twice for spectators

# 0.12beta
- added "display-name" option used in scoreboards, in the arena selector etc.
- shopkeepers messages update http://prntscr.com/o30zjo
- added "disable-npcs-for-empty-teams" option
- fixed issue #260 (unbreaking issue)
- fixed (maybe) issue #270 (anticheat conflict)
- added check to prevent error #275
- fixed issue #187 (fireball issue)
- fixed issue #277
- fixed issue #273 (region protection)
- fixed issue where villagers are not always spawning
- fixed issue #274 (invisibility potion)
- you can now disable parties completely using allow-parties option
- if you fall in void in shared mode you will no longer be moved to the bedwars lobby location
- added citizens load delay
- added corrupt chunks issue checker at arena load
- fixed issue where converting maps to the new mc name standard is not fully working for those who have a custom world container

# 0.11beta
- fixed items unbreaking deprecation at shop
- fixed a levels error at game end
- fixed setup holograms issue
- fixed issue #266 about respawning players
- fixed unbreakable deprecation at shop
- re-added "games-before-respawn" option for BUNGEE servers
- BUNGEE mode improvements
- fixed spectator mode
- fixed shopkeepers and generators issue related to chunks

# 0.10beta
- fixed issue where progress bar is not updating
- fixed database.enable path
- minor improvements
- removed gamesBeforeRestart option
- made it compatible with STARTUP load type
- fixed server software compatibility checker
- prevent players from using arenas as level-name in MULTIARENA and SHARED
- fixed issue #261
- fixed issue #265
- bw join random group is no longer case sensitive
- set main lobby command now is blocked in setup sessions
- added 1.14 support
- changed a task from async to sync
- people with bw.* permission can see now all the commands list
- added new papi placeholder ![group_count_name](https://gitlab.com/andrei1058/BedWars1058/wikis/papi-hook#arena-group-count) and fixed arena_count_name

# 0.9.13beta (API 13)
- fixed issue where the plugin was creating world files directly in the server container
- fixed issue where players were loosing their preferred language
- fixed issue where generators were using tier 2 configuration at tier 3
- fixed async kick issue https://pastebin.com/mgtraJuJ
- fixed "A PRIMARY KEY constraint failed" error
- fixed "Abot due to constraint violation" error
- fixed issue where "BD set" was remaining after /bw save
- fixed duplicated generator head issue
- negative levels/ xp will turn to 1
- fixed issue where you always get 0xp when you win a game
- fixed invisibility issue after respawning

# 0.9.12beta (API 13)
- fixed some issues about levels system #253 #255
- fixed egg bridge
- fixed next event
- fixed playing scoreboard path
- changed a task from sync to async on player quit
- fixed a placeholder in arena selector lore
- fixed issues #245 #248 #246 #225
- disabled shopkeepers sound
- added `/bw gui <group>` feature
- metrics update
- lobby sockets improvements

# 0.9.9beta (API 13)
- the map restore system was improved
- fixed issue #163 about stats head
- added internal level system (placeholders [here](https://gitlab.com/andrei1058/BedWars1058/wikis/scoreboards-configuration)).
- added new PAPI placeholders (check [here](https://gitlab.com/andrei1058/BedWars1058/wikis/papi-hook))
- changed scoreboard messages path
- bedwars lobby support improvements
- made villagers silent
- added possibility to open arenas GUI per group (/bw gui [group])

For OWNERS:
- if you don't want to reset the language messages, simply add the {level} placeholder in chat and {level} {progress} {currentXp} {requiredXp} in your lobby scoreboard.

For DEVs:
- api version changed to 13
- added PlayerXpGainEvent
- added PlayerLevelUpEvent
- added more getters and setters for developers around the classes

# 0.9.8beta (API 12)

- command tab-complete is now more accurate
- name-spaced commands are now disabled
- fixed issue #197 where players could move items in waiting/ spectate
- added an option to disable unused languages
- wheat/ farms are now protected in lobby/ game #198
- fixed issue #200 about a scoreboard error
- dropped items because of the lobby removal are now removed
- fixed cannot misure distace between x and y issue #194
- added BedWarsProxy compatibility (plugin coming soon)
- fixed games-before-restart option
- arena selector improvements
- fixed bed glitch #206

# 0.9.7beta (API 12)
- fixed use-bed-hologram not working
- fixed error you get when you click outside the inventory
- fixed default configuration for sign status-block
- check for arenas is now case sensitive when you create a sign
- automatically disable advancements for arena worlds
- fixed issue where you were able to see egg bridge particles when it was not building blocks

# 0.9.4beta (API 12)

- fixed 1.13 issue NoSuchFieldError: CAKE_BLOCK #181
- fixed issue where you can place anywhere #181
- added magic milk feature
- fixed issue where dragon was not spawning #148 #166 # 157
- fixed issue when players buy a iron sword after buying a stone sword,then iron sword will disappear. Made it so it will remove default swords with lower damage only. #174
- fixed issue where you can't drop items
- now when you join the server and there are no arenas set you it will dispatch /bw (if op)
- server restart is no longer required at /bw setLobby
- /bw autocreateteams range was changed from 150 to 200
- fixed issue where it says MAXED in lore when actually it isn't
- players are not longer able to move upgradable items to other inventories
- fixed issue where quick buy preferences were not saving (sqlite)
- added start countdown shortener in case if the arena is half full
- fixed issue where fireball is not breaking blocks
- introducing "[weight](https://gitlab.com/andrei1058/BedWars1058/wikis/shop#how-to-create-items-like-the-armor-category)". A new option for shop configuration.
- fixed disable-generator-for-empty-teams option
- paintings and item-frames are now protected in game and in lobby
- fixed issue where you get infinite blindness and slowness when trap triggered

# 0.9.1beta (API 12)

- fixed issue where players can take items out from the stats GUI #155
- fixed issue where you receive milk when buying sponge
- fixed silverfish/ iron golem console log issue #171
- fixed issue at shop where it says "MAXED" instead of "you can buy" #160
- fixed issue where you won't lose your sword when you die by default #160
- fixed issue where you spawn with all the swords you bought (if permanent)
- removed debug messages from /party accept
- possible fix for invisible armor issue
- added "allow-map-break" option in order to allow player to break almost all blocks from the map

# 0.9.0beta
* added new shop like hypixel
* fixed issue where bridge doesn't take the team color on 1.13+
* fixed party invite issue
* make it so the plugin won't start on craft bukkit because it is not supported.
* make it so the languages files take the server dns/ip from config so you don't have to edit all files.
* fixed join item paths. "Name not set" issue.
* fixed /bw removeTeam issue
* fixed issue where players can pick up items from armorstands in lobby
* fixed some other minor issues
* fixed issue #[142](https://gitlab.com/andrei1058/BedWars1058/issues/142)
* fixed issue #[141](https://gitlab.com/andrei1058/BedWars1058/issues/141)

# 0.8.6beta
* fixed issue #139 bucket issue on SHARED mode
* fixed issue #133 where spectators can pick up items in 1.2+
* fixed upgrade buy insufficient money console error

# 0.8.5beta
*  fixed issue #134 where the status message is always get from the default language
*  added compatibility with PAPI Pinger
*  implemented request #127 - added new papi placeholders

# 0.8beta

*  fixed issue #112 where players in arena can see messages from the others
*  implemented request #114 about parties
*  implemented request #90 about restoring a player displayname
*  added **/bw join random** command, request #105
*  implemented chat suggestions #75 **/shout** and [papi player team placeholder](papi-hook#player-team) 
*  fixed issue #97 where /bw join doesn't take you to the most filled arena
*  added lobby scoreboard also in SHARED mode, request #84
*  arena restart is now based on disable/enable
*  changed ore generators rotation speed
*  added new pages on the wiki/documentation
*  code cleanup and improvements
*  **added 1.13 support**
*  fixed issue #121 about base emerald upgrade
*  added new death cause messages, request #110
*  added loot messages, request #28
*  **arena selector** improvements
*  removed **safe mode** feature
*  you can now do the setup in BUNGEE mode aswell
*  fixed shop buy items amount issue seen sometimes
*  **added support for [Parties](parties-hook)** plugin by AlessoDP
*  **added sign block status feature**, request #125
*  **added [permissions](permissions) to commands** (it is no longer required to be op)
*  added **tab complete feature**, request #103
*  added new languages: **Romanian, Italian, Spanish, Polish and Russian**
*  fixed language change not changing until rejoin
*  fixed leave message called twice
*  messages paths and layout update
*  config paths changes (automatically converted)
*  fixed issue where command messages are not automatically created


For Developers: **API 11**
*  events were moved to api/events
*  you can get the bw commad instance trough api now
*  ParentCommand and SubCommand were moved to the api package
*  added PlayerReJoin event
