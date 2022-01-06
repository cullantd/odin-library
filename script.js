let myLibrary = [];

function Book(title, author, numPages, hasRead) {
    this.title = title
    this.author = author
    this.numPages = numPages
    this.hasRead = hasRead
    this.info = function() {
        let info;
        if (hasRead === true) {
            info = (title + " by " + author + ", " + numPages + ", have read.")
            return info;
        } else {
            info = (title + " by " + author + ", " + numPages + ", not read yet.")
            return info;
        }
    }
}

function addBookToLibrary(title, author, numPages, hasRead) {
    const book = new Book(title, author, numPages, hasRead);
    myLibrary.push(book);
}

function displayArray() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.table(myLibrary[i]);
    }
}

//main
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary(theHobbit);
const harryPotter = new Book ("Harry Potter", "JK Rowling", 450, false);
addBookToLibrary(harryPotter);
const it = new Book ("It", "Stephen King", 500, false);
addBookToLibrary(it);

displayArray();