import input from 'readline-sync'

export class LMS {

    constructor() {
        this.booksInfo = [];
    }

    // function to add a book
    addBook(isbnNo, title, author, publishedYear) {

        if (!isbnNo || !title || !author || !publishedYear) {
            return "Please enter valid book details";
        }

        if (typeof isbnNo !== 'number' || typeof title !== 'string' || typeof author !== 'string' || typeof publishedYear !== 'number') {
            return "Please enter valid book details";
        }

        let bookexistwithIsbn = this.booksInfo.find((book) => book.isbnNo === isbnNo);

        if (bookexistwithIsbn) {
            return `The book with ISBN ${isbnNo} already exists`;
        }

        let books = {
            isbnNo,
            title,
            author,
            publishedYear,
            isBorrowed: false
        };
        
        this.booksInfo.push(books);
        return `"${title}" book added`;
    }

    // function to borrow a book 
    borrowBook(isbnNotoBorrow) {

        if (!isbnNotoBorrow) {
            return "Please enter an ISBN number";
        }

        if (typeof isbnNotoBorrow !== 'number') {
            return "ISBN number must be a number";
        }

        let bookToBorrow = this.booksInfo.find((book) => book.isbnNo === isbnNotoBorrow);

        if (!bookToBorrow) {
            return "No book found with this ISBN No.";
        }

        if (bookToBorrow.isBorrowed) {
            return `The book "${bookToBorrow.title}" is already borrowed`;
        }

        bookToBorrow.isBorrowed = true;
        return `"${bookToBorrow.title}" Book Borrowed successfully`;
    }

    // function to return borrowed books
    returnBook(isbnNotoReturn) {

        if (!isbnNotoReturn) {
            return "Please enter an ISBN number";
        }

        if (typeof isbnNotoReturn !== 'number') {
            return "ISBN number must be a number";
        }

        let bookToReturn = this.booksInfo.find((book) => book.isbnNo === isbnNotoReturn);

        if (!bookToReturn) {
            return "No book found with this ISBN No.";
        }

        if (!bookToReturn.isBorrowed) {
            return "The book is not currently borrowed";
        }

        bookToReturn.isBorrowed = false;
        return `"${bookToReturn.title}" book returned successfully`;
    }

    // function to get available books for the user
    viewAvailableBooks() {
        return this.booksInfo.filter((book) => !book.isBorrowed);
    }

}