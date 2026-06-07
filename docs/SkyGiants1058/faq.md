---
title: FAQ & Troubleshooting
sidebar_position: 5
---

# FAQ & Troubleshooting

### Arena won't start
If your arena is not starting, run `/sga validate` while in the arena setup session. Check the console for `[SGA-VALIDATE]` log entries which will point out missing configurations (e.g., missing team spawns, Giants, or Beast location).

### Invalid main lobby (MULTIARENA)
Make sure you have set the `multiarena.lobby-location` in `config.yml`. If this is not set, players won't have a place to return to after a game.

### MySQL errors
If you are seeing MySQL errors, double-check your database credentials in the configuration. Ensure the database already exists; the plugin will handle table creation automatically.

### World loading issues
SkyGiants1058 is designed to be compatible with major world managers. If you encounter issues, ensure your worlds are not set to read-only and that you're using a compatible version of your preferred world manager.

### Interaction blocked
If players cannot interact with NPCs or items, check if other protection plugins (like WorldGuard) are blocking interactions in the arena or lobby world. You may need to adjust priorities or add exclusions.
