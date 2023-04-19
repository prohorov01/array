// //1. Створити клас Людина.
// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}
// 2. Створити клас Квартира.
// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
class Apartment extends Person {
  people = [];
  newPeople(people) {
    this.people.push(people);
  }
}
// 3. Створити клас Будинок.
// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.
class House {
  constructor(maxApartment) {
    this.maxApartment = maxApartment;
    this.apartment = [];
  }
  newApartment(apartment) {
    if (this.apartment.length < this.maxApartment) {
      this.apartment.push(apartment);
    } else {
      console.log("Перевищує максимальну кількість квартир");
    }
  }
}

// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Квартира;
// додадити екземпляри класу Людина до екземплярів класу Квартира;
// екземпляр класу Будинок;
// додадити екземпляри класу Квартира до екземплярів класу Будинок.
const person1 = new Person("John", "men");
const person2 = new Person("Petty", "women");

const apartment1 = new Apartment("John");
const apartment2 = new Apartment();

apartment1.newPeople("John");
apartment2.newPeople("Petty");

const house = new House(2);

house.newApartment(apartment1);
house.newApartment(apartment2);

console.log(apartment1.people);
console.log(apartment2.people);

//[ 'John' ]
//[ 'Petty' ]
