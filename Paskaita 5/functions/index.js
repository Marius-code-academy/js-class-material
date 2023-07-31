function sayHello(name, age = 10) {
  console.log("Hello " + name + age);
  console.log("Youre age is " + age);
}

sayHello("Marius", 20);

sayHello("Adrius");

const num = 12;

function addNumbers(x, y) {
  sayHello("Marius");
  const sum = x + y;
  console.log(num);

  function hello() {
    console.log("Inside a function");
  }
  hello();

  return sum;
}
const sum = addNumbers(3, 5);
console.log(addNumbers(6, 9));

function findBiggest(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

console.log(findBiggest(7, 6));

function checkAge(age) {
  return age > 18 ? true : confirm("Ar Tikrai?");
  // if (age > 18) {
  //   return true;
  // } else {
  //   return confirm("Ar tikrai?");
  // }
}

// console.log(checkAge(17));

min(1, 5);

function min(x, y) {
  if (x < y) {
    return x;
  } else if (y < x) {
    return y;
  } else {
    return "Jie yra lygus";
  }
}

console.log(min(1, -6));
console.log(min(1, 1));

const func1 = function (name) {
  console.log("hello " + name);
};

func1("Vytautas");

const arrowFunction = (name) => {
  console.log(name);
};

arrowFunction("Matas");

sumFunc(7, 8);

const sumFunc = (x, y) => x + y;

console.log(sumFunc(5, 7));
