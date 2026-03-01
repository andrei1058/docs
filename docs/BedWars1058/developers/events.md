---
sidebar_label: Events
title: Events
sidebar_position: 5.3
---
BedWars1058 provides many events that you can use to extend its functionality. You can see the full list in the [JavaDocs](https://javadocs.andrei1058.dev/BedWars1058).

#### Gameplay Events
- `ArenaStatusChangeEvent`: Called when an arena's status changes.
- `BedBreakEvent`: Called when a bed is broken.
- `GeneratorUpgradeEvent`: Called when a diamond/emerald generator is upgraded.
- `NextEventCountdownEvent`: Called when the countdown for the next event (e.g. bed destruction) decreases.

#### Player Events
- `PlayerJoinArenaEvent`: Called when a player joins an arena.
- `PlayerLeaveArenaEvent`: Called when a player leaves an arena.
- `PlayerKillEvent`: Called when a player is killed.
- `PlayerRejoinEvent`: Called when a player rejoins an arena.
- `PlayerRespawnEvent`: Called when a player respawns.

#### Team Events
- `TeamAssignEvent`: Called when a player is assigned to a team.
- `TeamEliminatedEvent`: Called when a team is eliminated.
- `EnemyBaseEnterEvent`: Called when a player enters an enemy's base.
- `EnemyBaseLeaveEvent`: Called when a player leaves an enemy's base.

#### Shop Events
- `ShopBuyEvent`: Called when a player buys an item from the shop.
- `ShopOpenEvent`: Called when a player opens the shop.

#### Upgrade Events
- `UpgradeBuyEvent`: Called when a player buys a team upgrade.

### Example
```java
@EventHandler
public void onBedBreak(BedBreakEvent e) {
    Player player = e.getPlayer();
    ITeam team = e.getTeam();
    // Do something
}
```
