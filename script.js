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
}

const display = document.querySelector(".display");
const modal = document.querySelector("#form-modal");
const addButton = document.querySelector(".add");
const closeButton = document.querySelector(".close");
const submitButton = document.querySelector(".submit");

myLibrary.forEach(book => {
    const div = document.createElement("div");
    div.classList.add("book");
    div.textContent = book.info();
    display.appendChild(div);
})

addButton.addEventListener("click", e => {
    modal.showModal();
})

closeButton.addEventListener("click", e => {
    modal.close();
})

submitButton.addEventListener("click", e => {
    e.preventDefault();
    e.close();
})