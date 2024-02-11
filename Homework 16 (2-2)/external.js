let book = {
    title:"",
    author:"",
    readingStatus: true,
    bookInfo: function() {
        if (this.readingStatus) {
            console.log(`Already readed ${this.title} by ${this.author}`);
        } else {
            console.log(`You still need to read ${this.title} by ${this.author}`);
        }
    }
};

const bookTitle = prompt("Enter the book's title:");
const bookAuthor = prompt("Enter the book's author:");
const bookReadingStatus = confirm("Have you already read this book?");

const myBook = Object.create(book);
myBook.title = bookTitle;
myBook.author = bookAuthor;
myBook.readingStatus = bookReadingStatus;

myBook.bookInfo();




