---
sidebar_label: Compatibility
sidebar_position: 1.3
title: Compatibility 
slug: /compatibility/
---
---
### Supported Server Software

| Status | Minecraft Edition | Server Software                     |
|--------|-------------------|-------------------------------------|
| 🟩     | Java Edition      | [Spigot](https://www.spigotmc.org/) | 
| 🟩     | Java Edition      | [Paper](https://papermc.io/)        |

### Supported Minecraft Versions

| Status | Mc version          | Package name | Minimum Java Version | End of Support                 |
|--------|---------------------|--------------|----------------------|--------------------------------|
| 🟩     | 1.20.4              | v1_20_R4     | 17                   | Supported                      |
| 🟩     | 1.20.3              | v1_20_R3     | 17                   | Supported                      |
| 🟨     | 1.20.2              | v1_20_R2     | 17                   | Scheduled for removal in 2024. |
| 🟨     | 1.20                | v1_20_R1     | 17                   | Scheduled for removal in 2024. |
| 🟩     | 1.19.3              | v1_19_R3     | 17                   | Supported                      |
| 🟨     | 1.19.1              | v1_19_R2     | 17                   | Scheduled for removal in 2024. |
| 🟩     | 1.18.2              | v1_18_R2     | 17                   | Supported                      |
| 🟥     | ~~1.18.1~~          | ~~v1_18_R1~~ | ~~17~~               | Removed                        |
| 🟨     | 1.17.1              | v1_17_R1     | 17                   | Scheduled for removal in 2024. |
| 🟩     | 1.16.5              | v1_16_R3     | 11                   | Supported                      |
| 🟥     | ~~1.16.3~~          | ~~v1_16_R2~~ | ~~11~~               | Removed in v22.7               |
| 🟥     | ~~1.16~~            | ~~v1_16_R1~~ | ~~11~~               | Removed in v22.7               |
| 🟥     | ~~1.15 - 1.15.2~~   | ~~v1_15_R1~~ | ~~11~~               | Removed in v22.7               |
| 🟥     | ~~1.14 - 1.14.2~~   | ~~v1_14_R1~~ | ~~11~~               | Removed in v22.7               | 
| 🟥     | ~~1.13.1 - 1.13.2~~ | ~~v1_13_R2~~ | ~~8~~                | Removed in v22.7               | 
| 🟩     | 1.12.2              | v1_12_R1     | 11                   | Supported                      |
| 🟥     | ~~1.11~~            | ~~v1_11_R1~~ | ~~8~~                | Removed in v22.7               |
| 🟥     | ~~1.10 - 1.10.2~~   | ~~v1_10_R1~~ | ~~8~~                | Removed in v22.7               |
| 🟥     | ~~1.9.4~~           | ~~v1_9_R2~~  | ~~8~~                | Removed in v22.7               |
| 🟨     | 1.8.8               | v1_8_R3      | 11                   | Scheduled for removal in 2024. |



<!-- Prettier doesn't change this -->
:::note
Minimum Java Version indicates the version BedWars1058 was compiled with.
:::

<!-- Prettier doesn't change this -->
:::tip
When running _[Paper](https://papermc.io/)_ on java 17+ you might want to append this parameter to your start command, (before -jar): `-DPaper.IgnoreJavaVersion=true`
:::

<!-- Prettier doesn't change this -->
:::tip
When running Spigot or Paper 1.8.8 with Java 11 you might get some errors when someone joins the server, 
or it might not start up at all. To avoid this issue you need to set `use-native-transport=false` in `server.properties`.
:::

### Incompatibility with other Server Software
Supported server software are stated at the top of this page. We will not provide any type of support for spigot forks 
or other software. There are a multitude of reasons, but in a few words it is very time-consuming to support many softwares
and versions at once. Keep note that BedWars1058 uses NMS code.

The following lines are from the community with their knowledge using unsupported software:
- **FoxSpigot**: if you can't pick up items from generators set `stack-items: true` in `BedWars1058/generators.yml`.

### Incompatibility with other Plugins
BedWars1058 works in any environment, but that depends on you, the server owner. Good configuration is the key.

World management plugins are the enemies of BedWars1058 if not well configured. Since BedWars1058 has its own system, 
secondary world management plugins need to be configured specifically to exclude management of BedWars maps.

We will not be offering assistance if you are using one of the following plugins as we do not recommend them: [ViaRewind](https://www.spigotmc.org/resources/52109/),
[ViaBackwards](https://www.spigotmc.org/resources/27448/), [PlugMan](https://dev.bukkit.org/projects/plugman) and [PerWorldPlugins](https://www.spigotmc.org/resources/96161/).
