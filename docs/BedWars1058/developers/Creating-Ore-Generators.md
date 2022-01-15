How to create a custom ore generator.

```java
public class ExampleGenerator implements IGenerator {

    @Override
    public void setHologram(@Nullable Hologram hologram) {
        // set a hologram above your generator
    }

    @Override
    public @Nullable Hologram getHologram() {
        // get the hologram above your generator
        return hologram;
    }

    @Override
    public void disable() {
        // disable your generator
        // this will be called when the game ends, at restarting phase
    }

    @Override
    public void upgrade() {
        // this is called when the arena decides to upgrade a generator based on Arena#updateNextEvent()
        // but if you want it to have a regular behavior you may want to
        // register it as an arena generator arena.getOreGenerators().add(myCustomGenerator)
        // make sure to add this in your code if the generator gets upgraded:
        // Bukkit.getPluginManager().callEvent(new GeneratorUpgradeEvent(this));
    }

    @Override
    public void spawnTry() {
        // This will attempt to spawn the items every second.
        // Things to keep in consideration: #getSpawnDelay, #getSpawnAtOnce
        // Handle your logistics and spawn behavior and then you should spawn items with #dropItem(loc)
        // this will require the generator to be registered as a team or arena generator
        // otherwise you need to handle it yourself.
        // Code example: https://pastebin.com/VAsVH6MM
    }

    @Override
    public void dropItem(Location location) {
        // Please keep track of getGeneratorsCfg().getBoolean(ConfigPath.GENERATOR_STACK_ITEMS)
        // so if items mustn't stack give them a custom name like this:
        // myItem.setCustomName("custom" + id); where id is something unique so they cant stack.
        // When the item is picked up its item name is automatically removed
        // if it starts with "custom".
        // Code example: https://pastebin.com/64vKUiCr
    }

    @Override
    public void setSpawnOre(ItemStack spawnOre) {
        // set generator drop item
    }

    @Override
    public IArena getArena() {
        // get the arena where the generator is placed
        return arena;
    }

    @Override
    public void rotate() {
        // rotate the generator preview-item if it is the case
        // this will require the generator to be registered as a team or arena generator
        // otherwise you need to handle it yourself
    }

    @Override
    public void setSpawnDelay(int spawnDelay) {
        // change spawn delay between drops
    }

    @Override
    public void setSpawnAtOnce(int spawnAtOnce) {
        // set the amount of items that are spawned at once
    }

    @Override
    public void enableRotation() {
        // this is called by BedWars1058 when the game starts. it requires to be a registered generator.
    }

    @Override
    public void setSpawnLimit(int value) {
        // set how many items can be dropped at the generator till pausing the drop of new ones
    }

    @Override
    public ITeam getOwnerTeam() {
        // get the owning team, if it is a team generator.
        // can be null if it does not belong to a team.
        return team;
    }

    @Override
    public ArmorStand getHologramHolder() {
        return null;
    }

    @Override
    public void setNextSpawn(int nextSpawn) {
        // set how many seconds till the next #dropItems
    }

    @Override
    public void setStackDroppedItems(boolean stackDroppedItems) {
        // change the item-stacking rule
    }

    @Override
    public void setType(GeneratorType type) {
        // change generator type
    }

    @Override
    public void destroyData() {
        // used to destroy any eventual generator data when the arena restarts
    }

    @Override
    public void setTier(int tier) {
        // change generator tier
    }
}
```

### How to register it

If you set its type as EMERALD/ DIAMOND and with no team, and you want it to be handled like a regular emerald/ diamond generator you have to add it to this list: `IArena#getOreGenerators()`. Or if you want it to be used as a team generator and refreshed (#spawnTry) by BedWars1058 add it to this list: `ITeam#getGenerators()`. For anything else, handle it yourself.