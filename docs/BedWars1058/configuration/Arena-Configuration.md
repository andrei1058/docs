###### Custom team name
- Each team can have a custom display name per language. You can configure a team name at this path: `team-name-<arenaName>-<teamName>` in `Languages/messages_x.yml`.

#### Config Explanation
```yaml
#This is the arena group.
#By default the group value is "Default"
#Read here about arena groups: https://gitlab.com/andrei1058/BedWars1058/wikis/arena-groups
group: Solo

#This is the name displayed on the scoreboard, in the arena gui.. etc.
#Leave this empty to use arena (folder) name as display name.
#/bw join <arena> will not work using the display name!
display-name: ""

#This is the minimum amount of players required to start the arena
minPlayers: 2

#This is the maximum team size
maxInTeam: 1

#Set this to false to block players from spectating arenas
allowSpectate: true

#This is the team spawn protection in blocks
#Players can't place blocks here
spawn-protection: 5

#This is the shop npc's protection in blocks
#Players can't place blocks here
shop-protection: 1

#This is the upgrade npc's protection in blocks
#Players can't place blocks here
upgrades-protection: 1

#This is the island radius used for features
#such as island trap and more
island-radius: 17

#This is the world border size so players can't build outside this
worldBorder: 300

#Players with Y (loc) under this number will get killed instantly
#Set to a big negative value to disable.
y-kill-height: -1

#This is the maximum allowed height for building
max-build-y: 180

#Set this to true if you want to disable generators for eliminated teamds
disable-generator-for-empty-teams: false

#Set this to true to disable the spawning of shopkeepers for empty teams
disable-npcs-for-empty-teams: true

#Set this to true if you want to disable the BedWars1058 drops management
#If you set this to true players will have regular loots as minecraft does
vanilla-death-drops: false

#Set this to false if you want to disable the bed holograms
use-bed-hologram: true
```