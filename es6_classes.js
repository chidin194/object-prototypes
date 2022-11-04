const foodTypes = {
  GRASS: "grass",
  FRUIT_AND_NUTS: "fruits and nuts",
  LARGE_PREY: "large prey",
  SMALL_PREY: "small prey"
}

class Zoo {
  constructor(cash) {
      this.cash = cash;
  }

  spend(amount) {
      if (this.cash < amount) {
          throw "Not enough money!";
      }
      this.cash -= amount;
      console.log(`Remaining funds: ${this.cash}`);
  }
}

class Animal {
  constructor(name, species){
      this.name = name;
      this.species = species;
      this.hunger = 100;
  }

  feed() {
      this.hunger = 0;
      console.log(`${this.name} the ${this.species} was fed, and it's full!`);
  }
}

class Herbivore extends Animal {
  constructor(name, species, foodType, zoo){
      super(name, species);
      this.foodType = foodType;
      this.zoo = zoo;
  }
  feedHerbivoreFood() {
      this.feed();
      console.log(`It ate ${this.foodType}!`)
      this.zoo.spend(200);
  }
}

const ourZoo = new Zoo(5000);

const marty = new Herbivore("Marty", "Zebra", foodTypes.GRASS, ourZoo);
marty.feedHerbivoreFood();