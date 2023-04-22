class student {
  constructor(name, surname, yers) {
    this.name = name;
    this.surname = surname;
    this.yers = yers;
    this.rating = [];
    this.visiting = new Array(25);
  }
  getGPA() {
    const hisDate = new Date().getFullYear();
    return hisDate - this.yers;
  }
  getRating(rating) {
    const sum = this.rating.reduce((acc, rating) => acc + rating, 0);
    return sum / this.rating.length;
  }

  getVisiting() {
    let schooleYes = 0;
    let lessonsYes = 0;
    this.visiting.forEach((lessons) => {
      if (lessons === true) {
        schooleYes++;
      }
      if (lessons === true || lessons === false) {
        lessonsYes++;
      }
    });
    return schooleYes / lessonsYes;
  }
  present() {
    for (let i = 0; i < this.visiting.length; i++) {
      if (this.visiting[i] === undefined) {
        this.visiting[i] = true;
        break;
      }
    }
  }
  absent() {
    for (let i = 0; i < this.visiting.length; i++) {
      if (this.visiting[i] === undefined) {
        this.visiting[i] = false;
        break;
      }
    }
  }

  summary() {
    const sReting = this.getRating();
    const sVisiting = this.getVisiting();
    if (sReting > 9 && sVisiting > 0.9) {
      return "Молодець!";
    }
    if (sReting > 9 || sVisiting > 0.9) {
      return "Добре, але можна краще ";
    }
    if (sReting < 9 && sVisiting < 0.9) {
      return "Редиска!";
    }
  }
  showStudent() {
    console.log(
      `${this.name}, ${
        this.surname
      }, ${this.getGPA()}, ${this.getRating()}, ${this.getVisiting()}, ${this.summary()}`
    );
  }
}
const student1 = new student("Bob", "Jordon", 19);
student1.rating = [10, 8, 1, 10, 1, 9, 1, 3, 10, 7];
const student2 = new student("Mike", "Mouse", 18);
student2.rating = [10, 10, 10, 10, 10, 10, 10, 10, 10, 6];
const student3 = new student("Jimmi", "Bush", 17);
student3.rating = [10, 10, 10, 10, 10, 10, 10, 10, 10, 5];
//Bob, Jordon, 2004, 6, 0.4, Редиска!
//Mike, Mouse, 2005, 9.6, 0.9, Добре, але можна краще
//Jimmi, Bush, 2006, 9.5, 0.92, Молодець!
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
console.log("GPA", student1.getGPA());
console.log("Rating", student1.getRating());
console.log(student1.summary());
console.log("visit", student1.getVisiting());
student1.showStudent();

student2.absent();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
console.log("GPA", student2.getGPA());
console.log("Rating", student2.getRating());
console.log(student2.summary());
console.log("visit", student2.getVisiting());
student2.showStudent();

student3.absent();
student3.absent();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
console.log("GPA", student3.getGPA());
console.log("Rating", student3.getRating());
console.log(student3.summary());
console.log("visit", student3.getVisiting());
student3.showStudent();
