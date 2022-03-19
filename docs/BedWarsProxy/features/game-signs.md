---
title: Game Signs
sidebar_position: 2.7
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Join games using signs

<Tabs>
  <TabItem value="dynamic" label="Dynamic Signs" default>


## Dynamic signs
Dynamic signs are able to fetch available arenas on a group and then display them.
It is important to place the signs in the order you want them to be used.

### How to create
In order to create a dynamic sign, place a sign on a block and write [bw] on the first line and the target group on the second line.
    
Example:<br/>
![](/img/dyn_sign.png)

:::caution Required Permission
The permisison required to create signs is `bw.setup`
:::
:::tip
CROUCH (SHIFT) + CLICK to remove a sign
:::

### How to edit messages
The sign layout can be found in `plugins/BedWarsProxy/Languages` under `dynamic-sign-content`:

```yaml
sign-dynamic-content:
  waiting:
  - '&4&l[BedWars-{id}]'
  - '&9{group}'
  - '&1{map}'
  - '&5{current}/{max}'
  starting:
  - '&4&l[BedWars-{id}]'
  - '&9{group}'
  - '&1{map}'
  - '&5{current}/{max}'
  searching:
  - '&4▆▆▆▆▆▆'
  - '&1&lBOOTING'
  - ''
  - '&4▆▆▆▆▆▆'
  no-games:
  - ''
  - '&8&lWaiting for'
  - '&7&lopen lobby'
  - ''
```

  </TabItem>
  <TabItem value="static" label="Static signs">

## Static signs
Static signs are only able to fetch available arenas with the given name.
Note that with autoscale, there may be more than one arena with the same name.

### How to create

In order to create a static sign, place a sign on a block and write [bw] on the first line, the arena group on the second line and the arena technical name on the third line.

Example:<br/>
![](/img/static_sign.png)
:::caution Required Permission
The permisison required to create signs is `bw.setup`
:::
:::tip
CROUCH (SHIFT) + CLICK to remove a sign
:::

### How to edit messages

Sign layout can be modified in `plugins/BedWarsProxy/Languages` under `sign-static-content`:
```yaml
sign-static-content:
  waiting:
  - '&4&l[BedWars-{id}]'
  - '&9{group}'
  - '&1{map}'
  - '&5{current}/{max}'
  starting:
  - '&4&l[BedWars-{id}]'
  - '&9{group}'
  - '&1{map}'
  - '&5{current}/{max}'
  playing:
  - '&4&l[BedWars-{id}]'
  - '&9{group}'
  - '&1{map}'
  - '{status}'
  searching:
  - '&4▆▆▆▆▆▆'
  - '&1&lBOOTING'
  - ''
  - '&4▆▆▆▆▆▆'
  no-games:
  - ''
  - '&8&lWaiting for'
  - '&7&lopen lobby'
  - ''
```

### Static sign placeholders

| Placeholder | Description                                  |
|-------------|----------------------------------------------|
| `{id}`      | Server ID                                    |
| `{group}`   | Arena display group in the player's language |
| `{map}`     | Map display name in the player's language    |
| `{current}` | Current players on that map                  |
| `{max}`     | Max player for that map                      |
| `{status}`  | Game status in the player's language         |

### Static sign settings

Static signs settings can be found in `plugins/BedWarsProxy/signs.yml` under `signs-settings.static-signs`:

```yaml
signs-settings:
  static-signs:
    #Show in-game arenas?
    show-playing: false
```

  </TabItem>
</Tabs>
