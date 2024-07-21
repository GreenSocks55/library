let addContainerButton = document.querySelector('.add-container-button');
addContainerButton.addEventListener("click", () => {
    toggleModal();
});

function toggleModal () {
    let modal = document.querySelector('.modal');
    if (modal.classList.contains("visible")) {
        modal.className = 'modal';
    }
    else {
        modal.className = 'modal visible';
    }
}

let addButton = document.querySelector(".form .submit");
addButton.addEventListener("click", (e) => {
    let titleInput = document.querySelector("add-book-title");
    let titleData = titleInput.value;
    let pagesInput = document.querySelector("add-book-pages");
    let pagesData = pagesInput.value;
    let authorInput = document.querySelector("add-book-author");
    let authorData = authorInput.value;
    let statusInput = document.querySelector('add-book-status');
    let statusData = statusInput.value;


})

const myLibrary = [];

function Book (name, pages, author, status) {
    this.name = name;
    this.pages = pages;
    this.author = author;
    this.status = status;
}

function addBookToLibrary (bookObject) {
    myLibrary.push(bookObject);
}

function render (bookObject) {
    let bookContainer = document.querySelector('.book-container');

    let titleDiv = document.createElement('div');
    titleDiv.className = 'book-title';
    titleDiv.textContent = `Title: `
    let span1 = document.createElement('span');
    span.textContent = `${bookObject.name}`;  
    titleDiv.appendChild(span1);

    let pagesDiv = document.createElement('div');
    pagesDiv.className = 'book-pages';
    pagesDiv.textContent = `Pages: `
    let span2 = document.createElement('span');
    span2.textContent = `${bookObject.pages}`;  
    pagesDiv.appendChild(span2);

    let authorDiv = document.createElement('div');
    authorDiv.className = 'book-author';
    authorDiv.textContent = `Author: `
    let span3 = document.createElement('span');
    span3.textContent = `${bookObject.author}`;  
    authorDiv.appendChild(span3);

    let statusDiv = document.createElement('div');
    if (bookObject.status == true) {
        statusDiv.className = 'book-read';
        statusDiv.textContent = `COMPLETED`;
    }
    else {
        statusDiv.className = 'book-unread';
        statusDiv.textContent = `INCOMPLETE`
    }

    let book = document.createElement('div');
    book.className = `book`;
    book.appendChild(titleDiv);
    book.appendChild(pagesDiv);
    book.appendChild(authorDiv);
    book.appendChild(statusDiv);

    bookContainer.appendChild(book);
} 

function clear () {
    let bookContainer = document.querySelector('.book-container');
    bookContainer.innerHTML = ``;
}