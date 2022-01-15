The `upgrades2.yml` file contains the configuration for the Upgrades NPC.
### Upgrades Main Menu
The default path is `default-upgrades-settings`.
This is a list of content to be displayed in the GUI. 
`default `stands for [arena group](arena-groups), so if your [arena group](/arena-groups) doesn't have a custom `<groupName>-upgrades-settings` it will use the default one.
You can use a category or an element in multiple upgrade menus.
```yaml
default-upgrades-settings:
  menu-content:
  - category-name1,1
  - upgrade-name1,2 #The integer after comma is the slot where to place the content in the Upgrades GUI.
  - separator-name1,5,6,7 #Multiple commas to put the element in multiple slots.
  # The first trap the team buys will have this price. (If the target trap haven't got a fixed price).
  trap-start-price: 2
  # Once a team buys a trap the trap-start-price will be incremented with this price. 2+2=4 next 4+2 etc.
  trap-increment-price: 2
  # Currency types: emerald, diamond, iron, gold, vault (for money)
  trap-currency: diamond
  # trap queue limit
  trap-queue-limit: 3
```
**Creating a custom menu for your arena group:**
1. First of all read the above text because you need to understand how it works.
2. Create a new line in `upgrades.yml` and write `<groupName>-upgrades-settings:` where `<groupName>` is your [arena group](/arena-groups) (example: solo, doubles).
3. Now add elements to your category like wrote above, under `menu-content`.


*Result:*
```yaml
solo-upgrades-settings:
  menu-content:
  - category-name1,10
  - category-name2,11
  - upgrade-name3,12
  # The first trap the team buys will have this price. (If the target trap haven't got a fixed price).
  trap-start-price: 2
  # Once a team buys a trap the trap-start-price will be incremented with this price. 2+2=4 next 4+2 etc.
  trap-increment-price: 2
  # Currency types: emerald, diamond, iron, gold, vault (for money)
  trap-currency: diamond
  # trap queue limit
  trap-queue-limit: 3
```
---

### Upgrades Category
Category sections are identified with `category-` + name. Example: `category-enchant`.
It requires the following attributes:
```yaml
category-example-1:
  # This is the category item in the menu.
  display-item:
    # This is the material type.
    # Check the links bellow for a list of materials.
    material: IRON_SWORD
    # Data is used for version 1.12 or older.
    # It is a number that usually indicates the item color.
    data: 0
    # The amount of stacked items.
    amount: 1
    # Set to true/ false to give the enchantment effect.
    enchanted: false
  # These are the elements displayed when you open this category.
  # You can only use upgrade and separator elements.
  category-content:
  - upgrade-name1,4 #Add a comma followed by a number to specify the slot where to put the element.
  - separator-name5,1,2,3 #Add multiple numbers separated by comma to put the element in multiple slots.
  
```
For a Material list compatible with versions from 1.8 to 1.12 [click here](https://gitlab.com/andrei1058/BedWars1058/wikis/1.7-1.12-materials).
For Materials list compatible with 1.13 and newer [click here](https://gitlab.com/andrei1058/BedWars1058/wikis/1.13-newer-materials).
---

### Upgrade Element
Upgrade elements are the most important thing. They define what an upgrade does.
Upgrade  sections are identified with `upgrade-` + name. Example: `upgrade-enchant-1`.
Required attributes:
```yaml
upgrade-enchant-1:
  # Even if your upgrade element does not have tiers, or better, it has a single tier
  # your options go under `tier-1`. For the next tier add a new line called `tier-2`
  # and so on.
  tier-1:
    # Display item is the item that represent this tier
    # in a menu or in a category.
    # Each tier has a display item.
    display-item:
      # This is the material type.
      # Check the links bellow for a list of materials.
      material: IRON_SWORD
      # Data is used for version 1.12 or older.
      # It is a number that usually indicates the item color.
      data: 0
      # The amount of stacked items.
      amount: 1
      # Set to true/ false to give the enchantment effect.
      enchanted: false
    # How much does this cost
    cost: 10
    # Currency types: emerald, diamond, iron, gold, vault (for money)
    currency: vault
    # Receive is the part where you define what this
    # upgrade does. Paths under this category can't have custom names.
    # The names used under this define what it does.
    #You can add the same element name multiple times.
    receive:

    # Add enchant-item under receive if you want to enchant some items for the entire team.
    ## Syntax: 'enchant-item:enchant type,amplifier,apply'
    ## enchant type list: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html
    ## amplifier is like -> Sharpness 2 where 2 stands for amplifier
    ## apply is where to apply the enchantment. Types: sword, armor, bow
    - 'enchant-item: DAMAGE_ALL,1,sword'
   
    # Add player-effect in the list if you want to give players potion effects.
    # Syntax: 'player-effect:effect type,amplifier,time_seconds,apply'
    ## effect types list: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html
    ## amplifier is like Haste I -> where 1 stands for amplifier
    ## time is seconds and tells how long to keep the effect. 0 for infinite, used for base effect.
    ## apply types: 
    ## team - applied to your teamt
    ## base - for teammates when they are on base
    - 'player-effect: FAST_DIGGING,1,0,team'

    # Add generator-edit in the list if you want to upgrade team generators.
    # Syntax: 'generator-edit:generator type,spawn delay,amount,limit'
    ## generator types are: iron, gold, emerald
    ## spawn delay is the delay in seconds between spawning items
    ## amount is the amount of items spawned at once
    ## limit tells the generator when to pause spawning items if the are not collected
    - 'generator-edit: gold,2,2,42'

    ## Add a dragon in the list to define how many dragons will have the team on game end.
    # Syntax: 'dragon:amount'
    ## Where amount is the dragons count.
    - 'dragon: 2'
```
---

### Base Trap
Base traps are triggered when enemies enter your island.
Base Trap sections are identified with `base-trap-` + name. Example: `base-trap-1`.
Required attributes:
```yaml
base-trap-1:
  # Display item is the item that represent this tier
  # in a menu or in a category.
  # Each tier has a display item.
  display-item:
    # This is the material type.
    # Check the links bellow for a list of materials.
    material: IRON_SWORD
    # Data is used for version 1.12 or older.
    # It is a number that usually indicates the item color.
    data: 0
    # The amount of stacked items.
    amount: 1
    # Set to true/ false to give the enchantment effect.
    enchanted: false

  # Cost is OPTIONAL
  # Traps without a cost will have the price based on "trap-increment-price"
  cost: 10

  # Currency types: emerald, diamond, iron, gold, vault (for money)
  # Currency is OPTIONAL
  currency: vault

  # Use custom messages for this trap.
  # Message paths will be generated after a server restart in each language file.
  custom-announce: false

  # Use a custom sound for this trap.
  # Traps without a sound set will use ENTITY_ENDERMAN_TELEPORT.
  sound: BLOCK_ANVIL_FALL

  # Receive is the part where you define what this
  # upgrade does. Paths under this category can't have custom names.
  # The names used under this define what it does.
  #You can add the same element name multiple times.
  receive:

  # Add disenchant-item under receive if you want to disenchant some items for the entering enemy.
  ## Syntax: 'enchant-item:enchant type,apply'
  ## enchant type list: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html
  ## apply is where to apply the enchantment. Types: sword, armor, bow
  - 'disenchant-item: DAMAGE_ALL,sword'
   
  # Add player-effect in the list if you want to give potion effects.
  # Syntax: 'player-effect:effect type,amplifier,time_seconds'
  ## effect types list: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html
  ## amplifier is like Haste I -> where 1 stands for amplifier
  ## time is seconds and tells how long to keep the effect. 0 for infinite, used for base effect.
  ## apply types: 
  ## team - applied to your teamt
  ## base - for teammates when they are on base
  ## enemy - to enemies when they enter your island range
  - 'player-effect: SPEED,1,0,team'
  - 'player-effect: HASTE,1,0,enemy'

  ## Add this to remove potion effects when a enemy enter your island range.
  # Syntax: 'remove-effect: effect type'
  ## Effect type is the effect to be removed.
  - 'remove-effect: INVISIBILITY'

  # Add command under receive if you want to execute a command when bought.
  # Syntax: command: dispatchType, command string here
  # Dispatch types: 
  # ONCE_AS_CONSOLE - will run the command a single time as console
  # FOREACH_MEMBER_AS_CONSOLE - will execute the command foreach player as console
  # FOREACH_MEMBER_AS_PLAYER - will execute the command foreach player as player
  # Placeholders:
          # {buyer} buyer name, {buyer_uuid} for buyer uuid
          # {team} for team identifier, {team_display} for team display name
          # {team_color} for team color, {arena} for arena identifier
          # {arena_display} for arena display name, {arena_world} for worldName
          # {arena_group} for arena group name.
          # Placeholders when executing foreach player: 
          # {player} for current player name, {player_uuid} for current player UUID.
  # DO NOT USE space after comma (,)
  - 'command: FOREACH_MEMBER_AS_CONSOLE,give {player} diamond 20'
```
---

### Trap Preview Slot
This is the item shown on trap slots.
This will be replaced with trap items when they are active.
They are identified by `trap-slot-` + name.
Required attributes:
```yaml
trap-slot-glass:
  # This is the material type.
  # Check the links bellow for a list of materials.
  material: IRON_SWORD
  # Data is used for version 1.12 or older.
  # It is a number that usually indicates the item color.
  data: 0
  # The amount of stacked items.
  amount: 1
  # Set to true/ false to give the enchantment effect.
  enchanted: false
```

---

### Separator Element
Separators are simple items added for design purpose.
They are identified by `separator-` + name.
Required attributes:
```yaml
separator-example-1:
  # on-click will execute a command as player when a player will click on it.
  # bw upgrades menu can only be used when you are near the upgrades NPC.
  # placeholders {player} - player name, {team} - team name
  on-click:
    player:
    - 'bw upgradesmenu'
    console:
    - 'something'
  display-item:
    # This is the material type.
    # Check the links bellow for a list of materials.
    material: IRON_SWORD
    # Data is used for version 1.12 or older.
    # It is a number that usually indicates the item color.
    data: 0
    # The amount of stacked items.
    amount: 1
    # Set to true/ false to give the enchantment effect.
    enchanted: false
```
---