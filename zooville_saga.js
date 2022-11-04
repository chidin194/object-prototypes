const foodTypes = {
  GRASS: "grass",
  FRUIT_AND_NUTS: "fruits and nuts",
  LARGE_PREY: "large prey",
  SMALL_PREY: "small prey"
}

const animal = {
  init: function (name, species, diet, foodType) {
      this.name = name;
      this.species = species;
      this.hunger = 100;
      this.foodType = foodType;
      this.diet = diet;
      this.feed = animal.feed;

  },
  feed: function () {
      if (this.diet === "Carnivore") {
        carnivore.feedCarnivoreFood();
      } else if (this.diet === "Herbivore") {
        herbivore.feedHerbivoreFood();
      }
      this.hunger = 0;
      
      console.log(`Zoo balance is now ${zoo.cash}`)

      console.log(`${this.name} the ${this.species} was fed with ${this.foodType}. They are no longer hungry.`)
  }
};

const carnivore = {
  feedCarnivoreFood: function () {  
    zoo.spend(500);
  }
}

const herbivore = {
  feedHerbivoreFood: function () {
    zoo.spend(200);
  }
}

const zoo = {
  cash: 4000,
  spend: function (amount) {
      if (this.cash < amount) {
          throw "Not enough money!";
      }
      this.cash -= amount;
      console.log(`Remaining funds: ${this.cash}`);
  }
};

// const alex = new animal.init("Alex", "Lion", "Carnivore");
const marty = new animal.init("Marty", "Zebra", "Herbivore", foodTypes.GRASS);
marty.feed();
console.log(zoo.cash);