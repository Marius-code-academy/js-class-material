const x = 15;
const y = 20;

if (x > y) {
  console.log("Taip x yra daugiau uz y");
} else {
  console.log(" x yra maziau uz y");
}

if (x === 15) {
  console.log("x yra 15");
} else if (x === 20) {
  console.log("x yra 20");
} else {
  console.log("nepavyko atspeti koks yra x");
}

if (y === 21) {
  console.log("fadsf");
}

let kaRytApsirengti;
const arRytSninga = false;
const arRytLyja = true;

if (arRytSninga) {
  kaRytApsirengti = "Striuke";
} else if (arRytLyja) {
  kaRytApsirengti = "Dzemperis";
} else {
  kaRytApsirengti = "Tai kuo dabar apsirenges";
}

console.log(kaRytApsirengti);

const num = 0;

if (num === 0) {
  console.log("nei tas nei tas");
} else if (num % 2 === 0) {
  console.log("lyginis");
} else {
  console.log("nelyginis");
}

const numberStringOfMusicians = prompt("ivesk skaiciu");
const numberOfMusicians = +numberStringOfMusicians;
console.log(typeof numberOfMusicians);
console.log(numberOfMusicians);

// Number.isNaN(numberOfMusicians);

if (numberOfMusicians === 0) {
  console.log("ne grupe");
} else if (numberOfMusicians === 1) {
  console.log("solo");
} else if (numberOfMusicians === 2) {
  console.log("duo");
} else if (numberOfMusicians === 3) {
  console.log("trio");
} else if (numberOfMusicians === 4) {
  console.log("kvartetas");
} else if (numberOfMusicians > 4) {
  console.log("didele grupe");
}

switch (numberOfMusicians) {
  case 0:
    console.log("ne grupe");
    break;
  case 1:
    console.log("solo");
    break;
  case 2:
    console.log("Duo");
    break;
  case 3:
    console.log("Trio");
  case 4:
    console.log("kvartetas");
  case 3:
    console.log("dar kazkas");
    break;
  default:
    console.log("neatitiko nei vieno varianto");
    break;
}
