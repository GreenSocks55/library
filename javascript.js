let libraryLength = 0;
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
    let titleInput = document.querySelector("#add-book-title");
    let titleData = titleInput.value;
    let pagesInput = document.querySelector("#add-book-pages");
    let pagesData = pagesInput.value;
    let authorInput = document.querySelector("#add-book-author");
    let authorData = authorInput.value;
    let statusInput = document.querySelector('#add-book-status');
    let statusData = statusInput.value;

    let book = new Book (titleData, pagesData, authorData, statusData);
    addBookToLibrary(book);
    clearLibrary();
    clearInput();
    libraryLength = 0;
    for (let singleBook of myLibrary) {
        render(singleBook);
        libraryLength++;
    }
    toggleModal();
})

const myLibrary = [];

function Book (name, pages, author, status) {
    this.name = name;
    this.pages = pages;
    this.author = author;
    this.status = status;
}

Book.prototype.changeStatus = function () {
    if (this.status == 'true') {
        this.status = 'false';
    }
    else {
        this.status = 'true';
    }
}

function addBookToLibrary (bookObject) {
    myLibrary.push(bookObject);
    libraryLength++;
}

function removeBookFromLibrary (index) {
    myLibrary.splice(index, 1);
}

function render (bookObject) {
    let bookContainer = document.querySelector('.book-container');
    let book = document.createElement('div');
    book.className = `book`;

    book.dataset.index = libraryLength;

    let deleteDiv = document.createElement('div');
    deleteDiv.className = `delete-container`;
    deleteDiv.textContent = 'X';
    deleteDiv.addEventListener("click", (e) => {
        deleteSelf(e);
        clearLibrary();
        libraryLength = 0;
        for (let singleBook of myLibrary) {
            render(singleBook);
            libraryLength++;
        }
    })

    let titleDiv = document.createElement('div');
    titleDiv.className = 'book-title';
    titleDiv.textContent = `Title: `
    let span1 = document.createElement('span');
    span1.textContent = `${bookObject.name}`;  
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
    if (bookObject.status == 'true') {
        statusDiv.className = 'book-read';
        statusDiv.textContent = `COMPLETED`;
        book.classList.add('completed');
    }
    else {
        statusDiv.className = 'book-unread';
        statusDiv.textContent = `INCOMPLETE`;
        book.classList.add('incomplete');
    }
    statusDiv.addEventListener("click", (e) => {
        changeSelf(e);
        clearLibrary();
        libraryLength = 0;
        for (let singleBook of myLibrary) {
            render(singleBook);
            libraryLength++; 
        }
    })

    book.appendChild(deleteDiv);
    book.appendChild(titleDiv);
    book.appendChild(pagesDiv);
    book.appendChild(authorDiv);
    book.appendChild(statusDiv);

    bookContainer.appendChild(book);
} 

function clearLibrary () {
    let bookContainer = document.querySelector('.book-container');
    bookContainer.innerHTML = ``;
}

function clearInput () {
    let titleInput = document.querySelector("#add-book-title");
    titleInput.value = ``;
    let pagesInput = document.querySelector("#add-book-pages");
    pagesInput.value = ``;
    let authorInput = document.querySelector("#add-book-author");
    authorInput.value = ``;
    let statusInput = document.querySelector('#add-book-status');
    statusInput.value = `true`;
}

function deleteSelf (e) {
    let index = e.target.parentElement.dataset.index;
    removeBookFromLibrary(index);
}

function changeSelf (e) {
    let index = e.target.parentElement.dataset.index;
    myLibrary[index].changeStatus();
}