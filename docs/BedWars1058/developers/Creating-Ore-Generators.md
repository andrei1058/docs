---
sidebar_label: Custom Ore Generators
title: Creating Custom Ore Generators
sidebar_position: 5.6
---
How to create a custom ore generator by implementing the `IGenerator` interface.

```java
public class ExampleGenerator implements IGenerator {

    @Override
    public HashMap<String, IGenHolo> getLanguageHolograms() {
        // Return holograms associated to this generator per language ISO.
        return holograms;
    }

    @Override
    public void disable() {
        // Disable your generator and destroy its data.
        // This is called when the game ends, at restarting phase.
    }

    @Override
    public void upgrade() {
        // Manage what to do when the generator upgrade is called from IArena#updateNextEvent
        // Make sure to add this in your code if the generator gets upgraded:
        // Bukkit.getPluginManager().callEvent(new GeneratorUpgradeEvent(this));
    }

    @Override
    public void spawn() {
        // This will attempt to spawn the items every second.
        // Handle your logistics and spawn behavior and then you should spawn items with #dropItem(loc)
    }

    @Override
    public void dropItem(Location location) {
        // Drop the item at a given location.
        // You can customize this location in order to drop items near a player
        // if it's a base generator with multiple teammates.
    }

    @Override
    public void setOre(ItemStack ore) {
        // Change the item that this generator will spawn.
    }

    @Override
    public IArena getArena() {
        // Get the arena assigned to this generator.
        return arena;
    }

    @Override
    public void rotate() {
        // This method is called every tick to manage the block rotation.
    }

    @Override
    public void setDelay(int delay) {
        // Change item spawn delay in seconds.
    }

    @Override
    public void setAmount(int amount) {
        // Set how many items should the generator spawn at once.
    }

    @Override
    public Location getLocation() {
        // Get the generator location.
        return location;
    }

    @Override
    public ItemStack getOre() {
        // Get generator ore item stack.
        return ore;
    }

    @Override
    public void updateHolograms(Player p, String iso) {
        // This will hide generator holograms with a different ISO.
    }

    @Override
    public void enableRotation() {
        // Enable generator rotation.
        // DIAMOND and EMERALD generator types will get the rotation activated when the arena starts.
    }

    @Override
    public void setSpawnLimit(int value) {
        // Set the limit when the generator will stop spawning new items until they are collected.
    }

    @Override
    public ITeam getBwt() {
        // Get the team assigned to this generator.
        // Returns null if this is not a team generator.
        return team;
    }

    @Override
    public ArmorStand getHologramHolder() {
        // Get generator hologram holder (armor stand) containing the rotating item.
        return armorStand;
    }

    @Override
    public GeneratorType getType() {
        // Get generator type.
        return type;
    }

    @Override
    public int getAmount() {
        // Get the amount of items that are dropped once.
        return amount;
    }

    @Override
    public int getDelay() {
        // Get spawn rate delay.
        return delay;
    }

    @Override
    public int getNextSpawn() {
        // Get seconds before next item spawn.
        return lastSpawn;
    }

    @Override
    public int getSpawnLimit() {
        // Get the spawn limit of the generator.
        return spawnLimit;
    }

    @Override
    public void setNextSpawn(int nextSpawn) {
        // Set the remaining time till the next item spawn.
    }

    @Override
    public void setStack(boolean stack) {
        // Set whether the dropped items should be stacked.
    }

    @Override
    public boolean isStack() {
        // Check if the dropped items can be stacked.
        return stack;
    }

    @Override
    public void setType(GeneratorType type) {
        // Set generator type.
    }

    @Override
    public void destroyData() {
        // Manage your data destroy.
        // This only must be called by the arena instance when it restarts.
    }
}
```

### How to register it

If you set its type as `EMERALD` or `DIAMOND` and with no team, and you want it to be handled like a regular emerald/diamond generator, you must add it to this list: `IArena#getOreGenerators()`. 

If you want it to be used as a team generator and refreshed (`#spawn`) by BedWars1058, add it to this list: `ITeam#getGenerators()`. 

For anything else, you will need to handle it yourself.