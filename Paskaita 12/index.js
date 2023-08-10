const x = 3.65;

console.log(typeof x.toString());
console.log(x.toFixed(3));
console.log(x.toPrecision(3));
const xString = "3.78";
console.log(typeof Number.parseFloat(xString));
console.log(Number.parseInt(xString));
console.log(Number.parseInt("asd"));
console.log(Number.isNaN(NaN));
console.log(typeof +"3.09");

const catsName = "pukis as d as dqwsd  dfa pukis";
console.log(catsName.includes("uka"));
console.log(catsName.endsWith("s"));
console.log(catsName.length);
console.log(catsName.indexOf("x"));
console.log(catsName.slice(1, 6));
console.log(catsName.split(" "));
console.log(catsName.replace("pukis", "kazkas kito"));
console.log(catsName.replaceAll("pukis", "kazkas kito"));

const isTrue = true;

console.log(typeof isTrue.toString());

const person = {
  name: "Andrius",
  age: 30,
};

const person1 = Object.freeze({
  name: "Tadas",
  age: 40,
  vidinisObjektas: {
    kazkas: 30,
  },
});

person1.age = 20;
person1.lastName = "sadfadsf";
person1.vidinisObjektas = 60;
person1.vidinisObjektas.kazkasNaujo = 100;

console.log(person1);

console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(Object.entries(person1));

const arr = [
  ["name", "vardas"],
  ["hasCar", true],
];
console.log(Object.fromEntries(arr));
