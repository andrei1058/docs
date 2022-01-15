# About
**BedWars1058** is providing [Vault](https://dev.bukkit.org/projects/vault) support since the first version ever released. 

You can have rank prefixies and suffixies in chat by adding [Vault](https://dev.bukkit.org/projects/vault) near your permissions plugin  like [PowerfulPerms](https://www.spigotmc.org/resources/powerfulperms.8143/), [PermissionsEx](https://dev.bukkit.org/projects/permissionsex) and any other permissions plugin based on [Vault](https://dev.bukkit.org/projects/vault).



# Placeholders
Prefix placeholder: `{vPrefix}`

Suffix placeholder: `{vSuffix}`

You can use these placeholders at the **chat** section in `messages_<country>.yml`

```yaml
chat:
  lobby: '{vPrefix}&7{player}{vSuffix}: {message}'
  waiting: '{vPrefix}&7{player}{vSuffix}: {message}'
  global: '{vPrefix}&6[SHOUT] {team} &7{player}&f{vSuffix}: {message}'
  team: '{vPrefix}&f{level}{team}&7 {player}{vSuffix} {message}'
  spectator: '{vPrefix}&7[SPECTATOR] {player}{vSuffix}: {message}'
```