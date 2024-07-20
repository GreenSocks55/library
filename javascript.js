const myLibrary = [];

function Book (name, pages, author, read,) {
    this.name = name;
    this.pages = pages;
    this.author = author;
    this.read = read;
}

function addBookToLibrary (bookObject) {
    myLibrary.push(bookObject);
}

function render (bookObject) {
    
} 