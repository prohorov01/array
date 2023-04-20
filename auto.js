// 1. Створити сутність "Людина".
// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.
class Person {
  constructor(name, yers) {
    this.name = name;
    this.yers = yers;
  }
  getPerson() {
    console.log(`${this.name}, ${this.yers}`);
  }
}
// 2. Створити сутність "Автомобіль".
// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина
// у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина
// для виведення інформації про власника
class car {
  person;
  constructor(brand, model, year, vin) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.vin = vin;
  }
  getCar() {
    console.log(`${this.brand}, ${this.model}, ${this.year}, ${this.vin}`);
  }

  getHero(newMen) {
    if (newMen.yers < 18) {
      console.log("Ваш вік менше 18 років");
      return;
    }
    this.person = newMen;
  }
  getPersonInfo() {
    console.log(`${this.person.name}`);
  }
}

// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.
person11 = new Person("Oleg", 20);
person22 = new Person("Weny", 19);
person33 = new Person("Vetal", 17);

person11.getPerson();
person22.getPerson();
person33.getPerson();

car33 = new car("Audi", "A6", "2015", "2020");
car44 = new car("BMW", "530", "2016", "9999");
car55 = new car("Toyota", "LandCruiser", "2019", "9090");

car33.getCar();
car33.getHero(person11);
car33.getPersonInfo();

car44.getCar();
car44.getHero(person22);
car44.getPersonInfo();

car55.getCar();
car55.getHero(person33);
car55.getPersonInfo();
