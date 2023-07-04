class Circle{
    constructor (pointA, pointB, radius) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.radius = radius;
    }
    getLengthCircle () {
        return 2 * Math.PI * this.radius;
    }
    static getLengthCircleByRadius (radius) {
        return 2 * radius * Math.PI;
    }
    getCopy () {
        return new Circle(this.pointA, this.pointB, this.radius);
    }
    static createNewCircle (pointA, pointB, radius) {
        return new Circle(pointA, pointB, radius);
    }
    isPointinCircle (a, b) {
        const x = Math.sqrt(((a - this.pointA) ** 2) + ((b - this.pointB) ** 2));
        return ((x <= this.radius) ? "It is in circle" : "It is not in circle");
    }
    toString () {
        return (`Circle has centre ( ${this.pointA} ; ${this.pointB} ) R = ${this.radius}`);
    }
}
// Task 1

function propsCount (object) {
    return (Object.keys(object)).length;
}
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};
propsCount(mentor);  // 3
// Task 2

class Person{
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return console.log(`Name: ${this.name }, Surname: ${this.surname})`);
    }
} 
class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName (middleName) {
        return `${this.name } ${this.surname} ${middleName}`;
    }
    showCourse() {
        const currentYear = new Date().getFullYear();
        const currcourse = (currentYear - this.year);
        return currcourse;
    }
}
const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4
// Task3

class Marker {
  constructor(color, inkPercentage) {
    this.color = color;
    this.inkPercentage = inkPercentage;
  }
  print(text) {
    let inkNeeded = text.replace(/\s/g, '').length * 0.5;
    if (inkNeeded <= this.inkPercentage) {
      this.inkPercentage -= inkNeeded;
      return document.writeln(`<span style="color: ${this.color}">${text}</span>`);
    } else {
      console.log('Not enough ink to print the text.');
      return '';
    }
  }
}
class RefillableMarker extends Marker {
  refill(inkAmount) {
    this.inkPercentage += inkAmount;
    if (this.inkPercentage > 100) {
      this.inkPercentage = 100;
    }
    document.writeln(`Marker refilled. Ink percentage: ${this.inkPercentage}`);
  }
}
const marker = new Marker('red', 50);
marker.print('Hello, world!');
const marker1 = new RefillableMarker(`red`, 20);
marker1.print(`abcd`);
marker1.refill(19);
// Task 4

class Worker {
  #experience;
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this.#experience = 1.2;
  }

  showSalary() {
    const salary = this.dayRate * this.workingDays;
    console.log(`Salary of ${this.fullName} is ${salary}`);
  }

  showSalaryWithExperience() {
    const salary = this.dayRate * this.workingDays * this.#experience;
    console.log(`Salary of ${this.fullName} considering experience is ${salary}`);
  }
  
  set experience(value) {
    this.#experience = value;
  }

  get experience() {
    return this.#experience;
  }
  
  static sortBySalary(workers) {
    workers.sort((a, b) => {
      const salaryA = a.dayRate * a.workingDays * a.experience;
      const salaryB = b.dayRate * b.workingDays * b.experience;
      return salaryA - salaryB;
    });

    return workers;
  }
}

// Створення екземплярів класу Worker
const worker1 = new Worker('John Smith', 50, 20);
const worker2 = new Worker('Alice Johnson', 70, 15);
const worker3 = new Worker('Bob Williams', 60, 25);

// Виклик методів для виведення зарплати
worker1.showSalary();
worker2.showSalary();
worker3.showSalary();

// Виклик методу для виведення зарплати з урахуванням досвіду
worker1.showSalaryWithExperience();

// Встановлення і виведення значення досвіду
worker1.experience = 1.5;
console.log(`Experience of ${worker1.fullName}: ${worker1.experience}`);

// Виведення зарплати з новим досвідом
worker1.showSalaryWithExperience();

// Масив з працівниками
const workers = [worker1, worker2, worker3];

// Сортування за зарплатою
const sortedWorkers = Worker.sortBySalary(workers);

// Виведення результатів сортування
sortedWorkers.forEach((worker) => {
  const salary = worker.dayRate * worker.workingDays * worker.experience;
  console.log(`${worker.fullName}: ${salary}`);
});
