class Book {
  constructor(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;

    Book.booksList.push(this);
  }

  static booksList = [];

  static listAuthors() {
    return Array.from(new Set(Book.booksList.map((book) => book.author)));
  }
}

const book1 = new Book("Кобзарь", "Тарас Шевченко", 1840);
const book2 = new Book("1984", "Джорж Оруэл", 1948);
const book3 = new Book("Мастер и Маргарита", "Михаил Булгаков", 1940);

console.log(Book.listAuthors()); 