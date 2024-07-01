// Define a FruitStand class that allows you to add different types of fruits with their quantities and prices, update them, and calculate the total value of all the fruits in the stand

class FruitStand {
  constructor() {
    this.fruits = {};
  }
  addFruit(name, quantity, price) {
    this.fruits[name] = { quantity, price };
  }
  updateQuantity(name, quantity) {
    this.fruits[name].quantity = quantity;
  }
  totalValue() {
    let total = 0;
    for (const fruit in this.fruits) {
      total += this.fruits[fruit].quantity * this.fruits[fruit].price;
    }
    return total;
  }
}


// Create a new fruit stand
let stand = new FruitStand();

// Add fruits to the stand
stand.addFruit("apple", 10, 0.5);
stand.addFruit("banana", 5, 0.2);
stand.addFruit("cherry", 20, 0.1);

// Update the quantity of an existing fruit
stand.updateQuantity("banana", 10);

// Calculate the total value of all fruits in the stand
console.log(stand.totalValue());
