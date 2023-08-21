class Book {
  constructor(title, year, id, author) {
    this.title = title;
    this.id = id;
    this.year = year;
    this.author = author;
  }

  logTitle() {
    console.log(this.title);
  }
}

class Library {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.books = [];
  }

  addNewBook(book) {
    this.books.push(book);
  }

  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  }

  removeBookById(id) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    console.log(bookIndex);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
    } else {
      console.log("Knygos su tokiu id nera");
    }
  }
}

const martynoMazvydo = new Library("Martyno Mazvydo", "prie seimo");

const kvepalai = new Book("Kvepalai", 2000, 1, "kazkoks autorius");
const altoriuSesely = new Book("Altoriu Sesely", 1990, 2, "Kazkas");

martynoMazvydo.addNewBook(kvepalai);
martynoMazvydo.addNewBook(altoriuSesely);

martynoMazvydo.removeBookById(1);

class Animal {
  constructor(name) {
    this.name = name;
  }
  breathe() {
    console.log("I am breathing");
  }
}

class Mamal extends Animal {
  constructor(typeOfDrink, name) {
    super(name);
    this.typeOfDrink = typeOfDrink;
  }
  drink() {
    console.log(" I am drinking milk");
  }
}

const karve = new Mamal("Vanduo", "Birute");

karve.breathe();
karve.drink();
console.log(karve.typeOfDrink);
console.log(karve.name);
