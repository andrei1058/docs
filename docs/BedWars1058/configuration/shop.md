---
sidebar_label: Shop Config
title: Shop Configuration
sidebar_position: 3.5
---

:::note

If you want different prices per arena group you should use a server as a single arena (BUNGEE serverType).

:::

Make sure you're using the right material name when changing item materials in this config. If you want to make [custom categories](shop#how-to-create-items-like-the-armor-category). scroll to the bottom of the page.

For a list of materials, sounds, and potions, check the [resources page](../resources).

The following types of armor are supported: Leather, Chainmail, Iron, Diamond, Golden and Netherite. Please refer to the item list of the version you are using for the correct item names.

```yaml
# This category contains various settings
shop-settings:
  # Quick-buy button
  quick-buy-category:
    material: NETHER_STAR
    amount: 1
    data: 0
    enchanted: false

  # This item is used to fill empty
  # spaces in the quick buy category
  quick-buy-empty-item:
    material: RED_STAINED_GLASS_PANE
    amount: 1
    data: 4
    enchanted: false

  # Separator item between categories and items
  regular-separator-item:
    material: GRAY_STAINED_GLASS_PANE
    amount: 1
    data: 7
    enchanted: false

  # Separator item under selected category
  selected-separator-item:
    material: GREEN_STAINED_GLASS_PANE
    amount: 1
    data: 13
    enchanted: false

# This is not a shop category
# They are just shop special entities
shop-specials:
  # Here you configure which item should spawn the "BedBug" entity
  silverfish:
    enable: true
    material: SNOWBALL
    data: 0
    health: 8.0
    damage: 4.0
    speed: 0.25
    despawn: 15
  # Here you configure which item should spawn the "Dream Defender" entity
  iron-golem:
    enable: true
    material: HORSE_SPAWN_EGG
    data: 0
    health: 100.0
    despawn: 240
    speed: 0.25
  # Here you configure which item should spawn the "Pop-Up Tower"
  tower:
    enable: true
    material: CHEST

# This is not a shop category
# This section contains the items you receive at the quick-buy shop category by default 
quick-buy-defaults:
  element1:
    # Path to the category content
    path: blocks-category.category-content.wool
    # Where to place it in the inventory
    # Allowed slots interval [19; 26)U[28;35)U[37;44)
    slot: 19

# This is a category
# You can add and remove categories
# To create a new category just copy, and paste under this section
# don't forget to rename it
blocks-category:
  # The slot where to place the category
  # in the shop index. Value interval [1;8]
  category-slot: 1
  
  # Category display item
  category-item:
    material: ORANGE_TERRACOTTA
    data: 1
    amount: 1
    enchanted: false

  # Contents to show when you open
  # the category
  category-content:
    # Content 1
    wool:
      #Content settings
      content-settings:
      # Where to put the category content
      # in the shop category
      # Allowed slots interval [19; 26)U[28;35)U[37;44)
        content-slot: 19
        # Set this to true to give on respawn
        is-permanent: true
        # Set this to true to downgrade on death
        # Requires permanent true
        is-downgradable: false
      
      # Content tiers
      # Use one single tier for unupgradable items
      # You can add as many tiers you want
      content-tiers:
        # Tier 1 options
        tier1:
          # Display item in shop category
          tier-item:
            material: WHITE_WOOL
            data: 0
            amount: 16
            enchanted: false
          # Tier settings
          tier-settings:
            cost: 4
            # Available currencies: iron, gold, emerald, diamond and vault (for economy)
            currency: iron
          # Here you add the items you receive
          # When you buy this tier
          buy-items:
            wool:
              material: WHITE_WOOL
              data: 0
              amount: 16
              # Optional
              # Enchantments. Use comma to add more enchantments.
              enchants: DIG_SPEED 1,ARROW_DAMAGE 1
              # Optional
              # Potions. This only applies to potions.
              # Syntax: POTION_NAME SECONDS AMPLIFIER-1
              potion: JUMP 45 5
              # From 1.16+ you can give potions custom RGB color
              # Read more here: https://minecraft.gamepedia.com/Potion#Item_data
              potion-color: ''
          # Here you add the commands to be executed when players
          # buy this tier. Placeholders:
          # {player} for player name, {player_uuid} for player uuid
          # {team} for team identifier, {team_display} for team display name
          # {team_color} for team color, {arena} for arena identifier
          # {arena_display} for arena display name, {arena_world} for worldName
          # {arena_group} for arena group name.
          buy-cmds:
            # Commands executed as player (buyer)
            as-player:
            - some command
            # Commands dispatched by console
            as-console:
            - say hello {player}
              
```

### How to create items like the armor category

BedWars1058 provides a configuration called `weight` that cand be added under:
```yaml
namehere-category:
    category-content:
      element1:
        content-settings:
          weight: 1
```
If you buy a content from that shop category with weight 2 you won't be able to buy content with lower weight in this category. Like this:
```yaml
armor-category:
    category-content:
      iron:
        content-settings:
          weight: 1
      diamond:
        content-settings:
          weight: 2
```
In this example you'll no longer be able to buy the iron armor after buying the diamond armor.
