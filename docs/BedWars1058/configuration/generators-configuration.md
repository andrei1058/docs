---
sidebar_label: Generators
title: Generators Configuration
sidebar_position: 3.4
---

:::caution

Generators have been recoded in version 24.7 and they are currently experimental. This page and plugin configuration may be subject to changes.

:::

# Overview
Generators are floating blocks that will spawn items based on countdown timers. When they get upgraded they can spawn
items more frequently and/ or an increased quantity. This behaviour can be customised for each arena group or even for
an individual arena template.

# Configuration
By default, BedWars1058 provides the following item generators: netherite, emerald, diamond, gold and iron. You can
though use external add-ons that will register more via API. This section applies to previously mentioned generator
types.

## Location
The main location where generators can be configured is in `generators.yaml`, but some parts might be located in the
arena file when you decide to personalise one or multiple parameters for an individual arena template.

## Understanding the configuration file
By default, you get a file that starts with `Default:` and some subsections under it. The word `Default:` is to be
considered as the root configuration path for every single arena and/ or arena group where no specific configuration
is provided. Therefore `Default:` is going to be **entirely** ignored for my arena group called `2v2v2v2` in case I 
have provided a configuration path `2v2v2v2:` in the same file and on the same level as `Default:`.
Configuration section orders does not matter.

## Customizing multiple arenas in a group
As mentioned above, you customize a game group by adding a new configuration path in _generators_ file identical as
arena group identifier. E.g.: I have an arena group _4v4v4v4_ and I want to make generators spawn a richer quantity
of items here, so I'll be adding a new path called `4v4v4v4` in `generators.yml`. Now you replicate sub-contents from
`Default`, edit them and you're done.

### Required subsections and/ or parameters under your configuration section
Allowed elements under `Default` or [your arena group section](#custom-generators-per-arena-group) are generator
types as [listed above](#configuration).

<details>
<summary>So far your text should look like this</summary>

```yaml title="generators.yml"
myArenaGroup:
  generatorType:
```

If you really don't get the above piece **eat** this:

```yaml title="generators.yml"
4v4v4v4:
  diamond:
```
</details>


Under generator type you have 2 more options:

| Path    | Description                                                                   | Optional |
|---------|-------------------------------------------------------------------------------|----------|
| team    | Section for generators that are associated to a team. E.g. base generator.    | Yes      |
| no-team | Generators that are not associated to a team and can be found around the map. | Yes      |

If you predict not to use of the available cases you can avoid adding them in your file. In the instance where you
did not configure one of the cases, but it is required because you actually did set a generator for that case, you
will get a warning and the generator will not be available on the map.

<details>
<summary>So far your text should look like this</summary>

```yaml title="generators.yml"
myArenaGroup:
  generatorType:
    team:
    no-team:

```

If you really don't get the above piece **eat** this:

```yaml title="generators.yml"
4v4v4v4:
  diamond:
    team:
    no-team:
```
</details>


Going deeper under `team` or `no-team` you have the following settings at your disposition:

| Path        | Description                                                                                                                                                                      | Optional |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| amount      | Quantity of items to spawn.                                                                                                                                                      | No       |
| delay       | How often to spawn items in server ticks. 20 ticks = 1 second.                                                                                                                   | No       |
| spawn-limit | When to stop spawning, based on items on the grown that were not collected.<br/> Use `0` or `-1` for no limit.<br/>When this path is missing the subsection no limit is applied. | Yes      |

<details>
<summary>So far your text should look like this</summary>

```yaml title="generators.yml"
myArenaGroup:
  generatorType:
    team:
      amount: 2
      delay: 200
      spawn-limit: 10
    no-team:
      amount: 2
      delay: 1000
      spawn-limit: 10
```
</details>

## Customizing an individual arena template

## Example of a default configuration
{
<details>
<summary>Show yaml file</summary>

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
</details>
}

### Custom generators per Arena Group
If you don't know what is an arena group read about it [here](../setup/arena-groups.md).

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
