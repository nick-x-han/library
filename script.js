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
    this.hasReadString = function() {
        return this.read === false ? "Not Read" : "Already Read";
    }
    this.info = function() {
        return `${this.title} by ${this.author}, ${pages} pages, ` + this.hasReadString();
    }
}

function addBookToLibrary(library, title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    library.push(book);
    const div = document.createElement("div");
    div.classList.add("book");
    div.setAttribute("data-id", book.id);
    display.appendChild(div);
    let titleObject = document.createElement("div");
    let authorObject = document.createElement("div");
    let pagesObject = document.createElement("span");
    let readButton = document.createElement("button");
    let removeButton = document.createElement("button");

    titleObject.textContent = title;
    authorObject.textContent = "by: " + author;
    pagesObject.textContent = pages + " pages";
    readButton.textContent = book.hasReadString();
    readButton.classList.add("toggle-read");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove");

    readButton.addEventListener("click", e => {
        let id = readButton.parentNode.dataset.id;
        let index = myLibrary.findIndex(book => book.id == id);
        let book = myLibrary[index];
        book.read = !book.read;

        readButton.textContent = book.hasReadString();
    })

    removeButton.addEventListener("click", e => {
        let id = removeButton.parentNode.dataset.id;
        let index = myLibrary.findIndex(book => book.id == id);
        myLibrary.splice(index, 1);
        removeButton.parentNode.remove();
    })

    div.appendChild(titleObject);
    div.appendChild(authorObject);
    div.appendChild(pagesObject);
    div.appendChild(readButton);
    div.appendChild(removeButton);
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

addBookToLibrary(myLibrary, "Wide Sargasso Sea", "Jane Eyre", 758, false);
addBookToLibrary(myLibrary, "Dreadnaught", "Sam Peston", 410, true);
addBookToLibrary(myLibrary, "Kite", "Kid Win", 322, true);



addButton.addEventListener("click", e => {
    modal.showModal();
})

closeButton.addEventListener("click", e => {
    modal.close();
})

form.addEventListener("submit", e => {
    e.preventDefault();
    let hasRead = isRead.matches(':checked') ? true : false;
    addBookToLibrary(myLibrary, title.value, author.value, pages.value, hasRead);
    title.value = "";
    author.value = "";
    pages.value = "";

    modal.close();
})