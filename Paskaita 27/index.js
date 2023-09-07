import kazkoksKitasPavadininimas, {
  doStuff as pervadintaDoStuffFunkcija,
  antraFunkcija,
} from "./utils.js";

function sayHello() {
  console.log("hello");
}

function doStuff() {
  console.log("index js failo do stuff funkcija");
}

sayHello();
// doStuff();
// antraFunkcija();

kazkoksKitasPavadininimas();
doStuff();
antraFunkcija();
pervadintaDoStuffFunkcija();
