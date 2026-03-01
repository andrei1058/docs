---
sidebar_label: Custom Levels
title: Custom Levels
sidebar_position: 5.5
---
Developers can create their own "Player Level Manager" by implementing the `com.andrei1058.bedwars.api.levels.Level` interface.
Those methods are used by the plugin to display the player level in the scoreboard etc.

**How to create**
```java
public class CustomLevelsManager implements Level {
@Override
    public String getLevel(Player p) {
        return PlayerLevel.getLevelByPlayer(p.getUniqueId()).getLevelName();
    }

    @Override
    public int getPlayerLevel(Player p) {
        return PlayerLevel.getLevelByPlayer(p.getUniqueId()).getPlayerLevel();
    }

    @Override
    public String getRequiredXpFormatted(Player p) {
        return PlayerLevel.getLevelByPlayer(p.getUniqueId()).getFormattedRequiredXp();
    }

    @Override
    public String getProgressBar(Player p) {
        return PlayerLevel.getLevelByPlayer(p.getUniqueId()).getProgress();
    }

    @Override
    public int getCurrentXp(Player p) {
        return PlayerLevel.getLevelByPlayer(p.getUniqueId()).getCurrentXp();
    }

    @Override
    public String getCurrentXpFormatted(Player p) {
        return PlayerLevel.getLevelByPlayer(p.getUniqueId()).getFormattedCurrentXp();
    }

    @Override
    public int getRequiredXp(Player p) {
        return PlayerLevel.getLevelByPlayer(p.getUniqueId()).getNextLevelCost();
    }

    @Override
    public void addXp(Player player, int xp, PlayerXpGainEvent.XpSource source) {
        // Code to add XP to the player in your custom system
    }

    @Override
    public void setXp(Player player, int currentXp) {
        // Code to set the player's XP in your custom system
    }

    @Override
    public void setLevel(Player player, int level) {
        // Code to set the player's level in your custom system
    }
}
```

**How to register**
This will safe-disable the BedWars1058 internal Levels System and will register yours.
```java
BedWars bedwarsAPI = Bukkit.getServicesManager().getRegistration(BedWars.class).getProvider();
bedwarsAPI.setLevelAdapter(new CustomLevelsManager());
```