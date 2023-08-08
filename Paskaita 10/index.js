const person = {
  age: 26,
  name: "Marius",
  lastName: "asdfadsf",
  car: {
    make: "BMW",
    year: 2000,
  },
  pets: ["Pukis", "Reksas"],
  sayHello: () => {
    console.log("hello");
    console.log(this, "arrow function");
  },
  sayGoodbye: function () {
    console.log("bye" + this.name);
    this.name = "Tadas";
    console.log(this.name);
  },
};

console.log(person.age);
person.age = 40;
console.log(person.age);
console.log(person.car.make);
person.sayHello();

delete person.age;
person.lastName = "Pavarde";
console.log(person);
console.log(this);
person.sayGoodbye();

const person2 = {
  ...person,
  lastName: "kazkas kito",
};

console.log(person2);
console.log(person);

function Augintinis() {
  this.name = "Marius";
  console.log(this);
}

Augintinis();

const obj = {
  name: "Vytautas",
  age: 30,
};

function changeObject(objektas) {
  const copy = JSON.parse(JSON.stringify(objektas));
  copy.name = "Migle";
}

changeObject(obj);
console.log(obj);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello ${this.name}`);
  }

  sayBye(name) {
    console.log(`bye ${name}`);
  }
}

const marius = new Person("Marius", 26);
const rima = new Person("Rima", 30);
console.log(marius);
console.log(marius.name);
console.log(rima);
marius.sayHello();
rima.sayHello();

rima.sayBye("Viktoras");
