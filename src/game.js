export class Game {
  constructor(locations, items) {
    this.locations = locations;
    this.items = items;
    this.currentLocation = 'timeline';
    this.inventory = [];
    this.verified = false;
    this.followers = 0;
    
    this.displayIntro();
  }

  displayIntro() {
    return `Welcome to X Adventure!
You find yourself in the vast digital landscape of X (formerly Twitter).
Your goal: Become verified, gain followers, and survive the chaos.
Type 'help' for commands.

${this.locations[this.currentLocation].description}`;
  }

  processCommand(command) {
    const words = command.split(' ');
    const action = words[0];
    
    switch(action) {
      case 'look':
        return this.locations[this.currentLocation].description;
      
      case 'go':
        return this.moveToLocation(words[1]);
      
      case 'take':
        return this.takeItem(words.slice(1).join(' '));
      
      case 'inventory':
        return this.showInventory();
      
      case 'help':
        return `Available commands:
- look: Look around
- go [direction]: Move to a new location
- take [item]: Pick up an item
- inventory: Show your items
- use [item]: Use an item
- post: Make a post
- quit: Exit game`;
      
      case 'quit':
        return 'Thanks for playing!';
      
      default:
        return "I don't understand that command.";
    }
  }

  moveToLocation(direction) {
    const currentLoc = this.locations[this.currentLocation];
    if (currentLoc.exits[direction]) {
      this.currentLocation = currentLoc.exits[direction];
      return this.locations[this.currentLocation].description;
    }
    return "You can't go that way.";
  }

  takeItem(itemName) {
    const location = this.locations[this.currentLocation];
    const itemIndex = location.items.indexOf(itemName);
    
    if (itemIndex > -1) {
      location.items.splice(itemIndex, 1);
      this.inventory.push(itemName);
      return `Picked up ${itemName}`;
    }
    return "You can't take that.";
  }

  showInventory() {
    return this.inventory.length > 0
      ? `You are carrying: ${this.inventory.join(', ')}`
      : 'Your inventory is empty.';
  }
}
