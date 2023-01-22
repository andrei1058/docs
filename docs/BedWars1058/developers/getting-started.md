---
sidebar_label: Getting Started
title: Getting Started
sidebar_position: 5.1
---
## First step
If you want to use the API make sure to load your plugin after [BedWars1058](https://gitlab.com/andrei1058/BedWars1058).
1.  Add it as softdepend in [plugin.yml](https://www.spigotmc.org/wiki/plugin-yml/): `softdepend: [BedWars1058]`
2. Check if [BedWars1058](https://gitlab.com/andrei1058/BedWars1058) is on the server:

```java
@Override
public void onEnable() {
    //Disable if pl not found
    if (Bukkit.getPluginManager().getPlugin("BedWars1058") == null) {
            getLogger().severe("BedWars1058 was not found. Disabling...");
            Bukkit.getPluginManager().disablePlugin(this);
            return;
    }
}
```

## Getting API Methods
Initializing the API:
```java
BedWars bedwarsAPI = Bukkit.getServicesManager().getRegistration(BedWars.class).getProvider();
```

## JavaDoc
[Click here](https://javadocs.andrei1058.dev/BedWars1058/) for JavaDocs.

## Configuration
If you want to create a config file for your add-on, you should use our standars and create it in `plugins/BedWars1058/Addons/AddonName/config.yml`.
