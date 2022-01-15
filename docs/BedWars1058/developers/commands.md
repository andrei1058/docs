If you want to create a command for your add-on like `/bw mycmd` continue reading on this page.

**1.** Create a new class with extends `com.andrei1058.bedwars.command.SubCommand`:
```java
public class TutorialCommand extends SubCommand {
    
    //Provide information about the command
    public TutorialCommand(ParentCommand parent, String name) {
        super(parent, name);
    }
    
    @Override
    //Execute your code. return found will result command not found
    public boolean execute(String[] args, CommandSender s) {
        return false;
    }
}
```

**2.** Now you have to provide some information about your command:
```java
public TutorialCommand(ParentCommand parent, String name) {
        super(parent, name);

        // Is it a cmd for ops? False if you want it to be a public command.
        setOpCommand(true); //false if you want it to be a public command

        //Do you want to show it at /bw ?
        //Only ops can see the cmds list
        //Because the players receive a static list from messages file
        //If you set this to true, you MUST add also setDisplayInfo()
        showInList(true);

        //This is the command description at /bw
        //It requires a TextComponent but if you don't know how to use it
        //you can use com.andrei1058.bedwars.arena.Misc.msgHoverClick()
        setDisplayInfo(Misc.msgHoverClick("description", "hover description",
                "run this on click", ClickEvent.Action.RUN_COMMAND));

        //This is the order used to show sub-commands at /bw
        //The max value is 20
        //Lower value to show it upper, higher value to show it on the bottom
        setPriority(14);
        
        //Set this to true if it is a command used for arena set-up
        setArenaSetupCommand(false);
    }
```
**3.** After that you can deal with your code:
```java
    @Override
    public boolean execute(String[] args, CommandSender s) {

        //this will send "cmd not found" msg to the console
        if (!(s instanceof Player)) return false;
        
        Player p = (Player) s;
        
        if (args[0].equalsIgnoreCase("apple")){
            p.getInventory().addItem(new ItemStack(Material.APPLE));
        }
        
        //the command was executed in its scope so return true
        //again, return false will return command not found msg
        return true;
    }
```

**4.** Registering your sub-command:

All you have to do is to initialize the class.
```java
    @Override
    public void onEnable() {
        //Disable if pl not found
        if (Bukkit.getPluginManager().isPluginEnabled("BedWars1058")) {
            getLogger().severe("BedWars1058 was not found. Disabling...");
            setEnabled(false);
            return;
        }
        
        //Your command is: /bw tutorial apple
        //com.andrei1058.bedwars.commands.main.MainCommand
        BedWars bedwarsAPI = Bukkit.getServicesManager().getRegistration(BedWars.class).getProvider();
        new TutorialCommand(bedwarsAPI.getBedWarsCommand(), "tutorial");
    }
```
