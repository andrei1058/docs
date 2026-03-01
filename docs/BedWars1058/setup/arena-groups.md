---
sidebar_label: Grouping arenas
title: How to group arenas
sidebar_position: 2.4
---
### Why use a group?
You can group arenas by type, like solo, duals and 4v4 etc. Groups can have custom [scoreboards](../configuration/language-configuration.md), custom [team upgrades](../configuration/upgrades.md), custom [generators](../configuration/generators-configuration.md). Let's suppose that you've just created a new arena with `max-in-team = 1`. This means that it could be grouped as a *"Solo"* arena. Players could want to play alone in a team and they will just search for an arena in the join gui with _"Solo"_ in its lore. Or they may click on a [join NPC](../hooks/citizens-hook.md) called _"Solo"_ or maybe via command ```/bw join Solo```. An arena added to the *"Solo"* group will show like this on [join GUI](how-to-join-arenas.md#join-gui).

![new-gui](/uploads/new-gui.png)


### How to create an arena group
Type ```/bw arenaGroup create <name>``` where *name* is the group name.

### How to add an arena to a group
Type ```/bw arenaGroup  set <arenaName> <groupName>``` where *groupName* is the group's name and *arenaName* the arena's name.

### How to delete an arena group
Type ```/bw arenaGroup remove <name>``` where *name* is the group name.

### How to list arena groups
Type ```/bw arenaGroup list``` to see all created groups.

### Video tutorial

[![Video tutorial](https://img.youtube.com/vi/FJj1SvbIBA4/0.jpg)](https://www.youtube.com/watch?v=FJj1SvbIBA4 "Tutorial")