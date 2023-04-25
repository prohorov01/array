class Hamburger {
  constructor(size, filling) {
    this.size = size;
    this.filling = filling;
    this.toppings = [];
  }
  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_BIG = { price: 100, calories: 40 };
  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_POTATOES = { price: 15, calories: 10 };
  static TOPPING_SAUCE = { price: 15, calories: 0 };
  static TOPPING_MAYO = { price: 20, calories: 5 };

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    let price1 = this.size.price + this.filling.price;
    for (let TOPPING of this.toppings) {
      price1 += TOPPING.price;
    }
    return price1;
  }
  calculateCalories() {
    let calories1 = this.size.calories + this.filling.calories;
    for (let TOPPING of this.toppings) {
      calories1 += TOPPING.calories;
    }
    return calories1;
  }
}

var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log(`Calories:  ${hamburger.calculateCalories()}`);

// скільки коштує
console.log(`Price:   ${hamburger.calculatePrice()}`);

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log(`Price with sauce:   ${hamburger.calculatePrice()}`);
// Calories:  45
// Price:   80
// Price with sauce:   95

// //#2
// class Hamburger {
//   constructor(size, filling) {
//     this._price = size.price + filling.price;
//     this._calories = size.calories + filling.calories;
//     this._toppings = [];
//   }
//   addTopping(topping) {
//     this._toppings.push(topping);
//     this._price += topping.price;
//     this._calories += topping.calories;
//   }
//   get price() {
//     return this._price;
//   }
//   get calories() {
//     return this._calories;
//   }
// }

// Hamburger.SIZE = {
//   SMALL: { price: 50, calories: 20 },
//   BIG: { price: 100, calories: 40 },
// };

// Hamburger.STUFFING = {
//   CHEESE: { price: 10, calories: 20 },
//   SALAD: { price: 20, calories: 5 },
//   POTATOES: { price: 15, calories: 10 },
// };

// Hamburger.TOPPING = {
//   SAUCE: { price: 15, calories: 0 },
//   MAYO: { price: 20, calories: 5 },
// };

// const hamburger = new Hamburger(
//   Hamburger.SIZE.SMALL,
//   Hamburger.STUFFING.CHEESE
// );

// hamburger.addTopping(Hamburger.TOPPING.MAYO);

// console.log(`Calories: ${hamburger.calories}`);
// console.log(`Price: ${hamburger.price}`);

// hamburger.addTopping(Hamburger.TOPPING.SAUCE);

// console.log(`Price with sauce: ${hamburger.price}`);
// //Calories: 45
// //Price: 80
// //Price with sauce: 95
