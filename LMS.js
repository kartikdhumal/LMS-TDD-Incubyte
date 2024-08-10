import input from 'readline-sync'

export class LMS {

    constructor() {
        this.booksInfo = [];
    }

    // function to add a book
    addBook(isbnNo, title, author, publishedYear) {
       
    }

    // function to borrow a book 
    borrowBook(isbnNotoBorrow) {

      
    }

    // function to return borrowed books
    returnBook(isbnNotoReturn) {

       
    }

    // function to get available books for the user
    viewAvailableBooks() {
        return this.booksInfo.filter((book) => !book.isBorrowed);
    }

    addDetails() {
        let choice;
        do {
            console.log("-----LIBRARY MANAGEMENT SYSTEM-----");
            console.log("1. Add Books");
            console.log("2. Borrow Books");
            console.log("3. Return Books");
            console.log("4. View Available Books");
            console.log("5. Exit");

            choice = Number(input.question("\nEnter your choice : "));

            switch (choice) {

                case 1:
                    let isbnNo = Number(input.question("\nEnter ISBN No : "));
                    let title = input.question("Enter book title : ");
                    let author = input.question("Enter author name : ");
                    let publishedYear = Number(input.question("Enter publication year : "));
                    console.log(this.addBook(isbnNo, title, author, publishedYear));
                    break;

                case 2:
                    let isbnNotoBorrow = Number(input.question("\nEnter ISBN No : "));
                    console.log(this.borrowBook(isbnNotoBorrow));
                    break;

                case 3:
                    let isbnNotoReturn = Number(input.question("\nEnter ISBN No : "));
                    console.log(this.returnBook(isbnNotoReturn));
                    break;

                case 4:
                    let availableBooks = this.viewAvailableBooks();
                    console.log("Total Books : " + availableBooks.length);
                    availableBooks.forEach((book) => {
                        console.log("\nISBN No : " + book.isbnNo);
                        console.log("Title : " + book.title);
                        console.log("Author : " + book.author);
                        console.log("Publication year : " + book.publishedYear);
                    });
                    break;

                case 5:
                    console.log("Existing...");
                    break;

                default:
                    console.log(`Invalid choice!! try again`);

            }
        } while (choice != 5);
    }
}