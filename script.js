function Book(title, author, pages, hasRead) {
    if (!new.target) {
        throw Error("NO");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${pages} pages, ` + (this.hasRead === false ? "not read yet" : "already read");
    }
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 255, false);
console.log(theHobbit.info());