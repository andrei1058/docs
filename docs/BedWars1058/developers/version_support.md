---
sidebar_label: Adding Version Support
title: How to add platform and version support
sidebar_position: 5.5
---

Since version 25.2.1, BedWars1058 is able to allow developers register their own platform and server version support via API.

In order to achieve that you need to make an implementation of `dev.andrei1058.bedwars.platform.common.ServerPlatform` 
and register as a Service using `Bukkit.getServicesManager().register();` before BedWars1058 plugin is loaded.