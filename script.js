let myLibrary = [];

const bookshelf = document.getElementById("bookshelf");
const newBookButton = document.getElementById("new-book");

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

function addBookToLibrary(bookToAdd) {
    myLibrary.push(bookToAdd);

    const bookCard = document.createElement("div");
    bookCard.classList.add("card");
    bookCard.dataset.bookId = (myLibrary.length-1); //data-book-id corresponds to index in myLibrary array
    const bookTitleNode = document.createElement("h3");
    bookTitleNode.innerText = ("Title: " + bookToAdd.title);
    const bookAuthorNode = document.createElement("h4");
    bookAuthorNode.innerText = ("Author: " + bookToAdd.author);
    const bookNumPagesNode = document.createElement("div") ;
    bookNumPagesNode.innerText = ("Number of pages: " + bookToAdd.numPages);
    const bookHasReadNode = document.createElement("div");
    bookHasReadNode.className = "book-has-read-node";
    const toggleReadStatusButton = document.createElement("button");
    toggleReadStatusButton.id = "read-status-button";
    toggleReadStatusButton.innerText = "Click here to toggle read status"
    toggleReadStatusButton.setAttribute("onclick","toggleReadStatus('" + bookCard.dataset.bookId + "')");
    if (bookToAdd.hasRead === true) {
        bookHasReadNode.innerText = "Read";
    } else {
        bookHasReadNode.innerText = "Not yet read";
    }
    bookCard.appendChild(bookTitleNode);
    bookCard.appendChild(bookAuthorNode);
    bookCard.appendChild(bookNumPagesNode);
    bookCard.appendChild(bookHasReadNode);
    bookCard.appendChild(toggleReadStatusButton);
    bookshelf.appendChild(bookCard);
}

function displayArray() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.table(myLibrary[i]);
    }
}

function openForm() {
    console.log("Form coming up!");
    document.getElementById("new-book-form").style.display = "flex";
}

function closeForm() {
    console.log("Form closing!");
    document.getElementById("new-book-form").style.display = "none";

}

function submitForm() {
    let hasReadToBool = false;
    const titleInputValue = document.getElementById('book-title-input').value;
    const authorInputValue = document.getElementById('book-author-input').value;
    const numPagesInputValue = document.getElementById('book-num-pages-input').value;
    const hasReadInputValue = document.getElementById('book-has-read-input').value;
    if (hasReadInputValue === 'on') {
        hasReadToBool = true;
    }

    const newBook = new Book(titleInputValue, authorInputValue, numPagesInputValue, hasReadToBool);
    addBookToLibrary(newBook);
    closeForm();
}

function toggleReadStatus(bookId) {
    const bookNodeToToggle = document.querySelector("[data-book-id='" + bookId + "']");
    console.log("read status toggle! book title is: " + bookNodeToToggle);
    const textNodeToChange = bookNodeToToggle.querySelector('.book-has-read-node');

    if (myLibrary[bookId].hasRead === true) {
        myLibrary[bookId].hasRead = false;
        textNodeToChange.innerText = "Not yet read";
    } else {
        myLibrary[bookId].hasRead = true;
        textNodeToChange.innerText = "Read";
    }
}

//main
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary(theHobbit); //example 3
const harryPotter = new Book ("Harry Potter", "JK Rowling", 450, false);
addBookToLibrary(harryPotter); //example 2
const it = new Book ("It", "Stephen King", 500, false);
addBookToLibrary(it); //example 1