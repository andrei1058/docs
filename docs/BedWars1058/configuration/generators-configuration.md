---
sidebar_label: Generators Config
title: Generators Configuration
sidebar_position: 3.4
---
### Explanation
```yaml
#Under the "Default" configuration section there is the configuration for all the arena groups
#without a specified configuration. If you don't know what an arena group is you should read
#about them here: https://wiki.andrei1058.dev/docs/BedWars1058/setup/arena-groups
Default:
  #This contains the default settings for the iron generator on a team base
  #A player can change those values for his team buying upgrades
  #from the team upgrades NPC
  iron:
    #This is the iron-spawn delay in seconds
    delay: 2
    #How many iron ingots to spawn at once
    amount: 2
    #If the amount of iron ingots spawned on your generator
    #is equal to this, it won't spawn items anymore until
    #you collect the dropped items.
    spawn-limit: 32

  #This contains the settings for the gold generator on a team base
  #A player can change those values for his team buying upgrades
  #from the team upgrades NPC
  gold:
    #This is the gold-spawn delay in seconds
    delay: 6
    #How many gold ingots to spawn at once
    amount: 2
    #If the amount of gold ingots spawned on your generator
    #is equal to this, it won't spawn items anymore until
    #you collect the dropped items.
    spawn-limit: 7

  #This contains the settings for the diamond generators on a map
  diamond:
    #Settings for tier I
    tierI:
      #This is the diamond-spawn delay in seconds
      delay: 30
      #If the amount of diamonds spawned on a generator
      #is equal to this, it won't spawn items anymore until
      #you collect the dropped items
      spawn-limit: 4

    #Settings for tier II
    tierII:
      #This is the diamond-spawn delay in seconds
      delay: 20
      #If the amount of diamonds spawned on a generator
      #is equal to this, it won't spawn items anymore until
      #you collect the dropped items.
      spawn-limit: 6
      #When to upgrade diamond generators tier
      #Time in seconds
      #Upgrade after 360 seconds since the game start
      start: 360

    #Settings for tier III
    tierIII:
      #This is the diamond-spawn delay in seconds
      delay: 15
      #If the amount of diamonds spawned on a generator
      #is equal to this, it won't spawn items anymore until
      #you collect the dropped items.
      spawn-limit: 8
      #When to upgrade diamond generators tier
      #Time in seconds
      #Upgrade after 1080 seconds since tier II upgrade
      start: 1080
  emerald:
    #Settings for tier I
    tierI:
      #This is the emerald-spawn delay in seconds
      delay: 70
      #If the amount of emeralds spawned on a generator
      #is equal to this, it won't spawn items anymore until
      #you collect the dropped items.
      spawn-limit: 4

    #Settings for tier II
    tierII:
      #This is the emerald-spawn delay in seconds
      delay: 50
      #If the amount of emeralds spawned on a generator
      #is equal to this, it won't spawn items anymore until
      #you collect the dropped items.
      spawn-limit: 6
      #When to upgrade emerald generators tier
      #Time in seconds
      #Upgrade after 720 seconds since the game start
      start: 720

    #Settings for tier III
    tierIII:
      #This is the emerald-spawn delay in seconds
      delay: 30
      #If the amount of emeralds spawned on a generator
      #is equal to this, it won't spawn items anymore until
      #you collect the dropped items.
      spawn-limit: 8
      #When to upgrade emerald generators tier
      #Time in seconds
      #Upgrade after 1440 seconds since tier II upgrade
      start: 1440

#Set this to true if you want to stack
#the dropped items from generators
stack-items: false
`````

### Custom generators per Arena Group
If you don't know what is an arena group read about it [here](arena-groups).

Creating custom configuration it's really easy. Copy the `Default` configuration path, paste it and rename `Default` to your desired arena group. We'll use `4v4v4v4` as example. You can now change those configuration values for your `4v4v4v4` arenas.
````yaml
4v4v4v4:
  iron:
    delay: 2
    amount: 2
    spawn-limit: 32
  gold:
    delay: 6
    amount: 2
    spawn-limit: 7
  diamond:
    tierI:
      delay: 30
      spawn-limit: 4
    tierII:
      delay: 20
      spawn-limit: 6
      start: 360
    tierIII:
      delay: 15
      spawn-limit: 8
      start: 1080
  emerald:
    tierI:
      delay: 70
      spawn-limit: 4
    tierII:
      delay: 50
      spawn-limit: 6
      start: 720
    tierIII:
      delay: 30
      spawn-limit: 8
      start: 1440
````
