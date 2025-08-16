const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("NO");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${pages} pages, ` + (this.read === false ? "not read yet" : "already read");
    }
}

function addBookToLibrary(library, title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    library.push(book);
    const div = document.createElement("div");
    div.classList.add("book");
    div.textContent = book.info();
    display.appendChild(div);
}

const display = document.querySelector(".display");
const modal = document.querySelector("#form-modal");
const addButton = document.querySelector(".add");
const closeButton = document.querySelector(".close");
const submitButton = document.querySelector(".submit");

//form
const form = document.querySelector("form");
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const isRead = document.querySelector('#read');

// myLibrary.forEach(book => {
//     const div = document.createElement("div");
//     div.classList.add("book");
//     div.textContent = book.info();
//     display.appendChild(div);
// })

addButton.addEventListener("click", e => {
    modal.showModal();
})

closeButton.addEventListener("click", e => {
    modal.close();
})

form.addEventListener("submit", e => {
    e.preventDefault();

    addBookToLibrary(myLibrary, title.value, author.value, pages.value, isRead.value);

    modal.close();
})