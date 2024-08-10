import { LMS } from "./LMS";

describe('Library Management System', () => {

    test('should return appropriate error messages for invalid or missing book details when adding a book', () => {
        let lms = new LMS();
        expect(lms.addBook(null, 'Science', 'Kartik', 2019)).toBe("Please enter valid book details");
        expect(lms.addBook(101, '', 'Kartik', 2019)).toBe("Please enter valid book details");
        expect(lms.addBook(101, 'Science', '', 2019)).toBe("Please enter valid book details");
        expect(lms.addBook(101, 2335, 'Kartik', 2019)).toBe("Please enter valid book details");
        expect(lms.addBook(101, 'Science', 101, 2019)).toBe("Please enter valid book details");
        expect(lms.addBook(101, 'Science')).toBe("Please enter valid book details");
        expect(lms.addBook("101", 'Science', 'Kartik', "2019")).toBe("Please enter valid book details");
    })

    test('should send error for same ISBN No.', () => {
        let lms = new LMS();
        lms.addBook(101, 'Maths', 'Kartik', 2019);
        lms.addBook(101, 'Science', 'Krishna', 2014);
        expect(lms.addBook(101, 'Science', 'Krishna', 2014)).toBe("The book with ISBN 101 already exists");
    })

    test('should add a book and display it in the available books list', () => {
        let lms = new LMS();
        expect(lms.addBook(101, 'Maths', 'Kartik', 2019)).toBe(`"Maths" book added`);

        let expectedOutput = [{
            isbnNo: 101,
            title: 'Maths',
            author: 'Kartik',
            publishedYear: 2019,
            isBorrowed: false
        }];

        expect(lms.viewAvailableBooks()).toEqual(expectedOutput);
        expect(lms.viewAvailableBooks().length).toBe(1);
    })

    test('should return error messages for missing or invalid input when borrowing a book', () => {
        let lms = new LMS();
        lms.addBook(101, 'Maths', 'Kartik', 2019);
        expect(lms.borrowBook()).toBe("Please enter an ISBN number");
        expect(lms.borrowBook("101")).toBe("ISBN number must be a number");
    })

    test('should send error if ISBN No. not found to borrow book', () => {
        let lms = new LMS();
        lms.addBook(101, 'Maths', 'Kartik', 2019);
        lms.addBook(201, 'Science', 'Krishna', 2014);
        expect(lms.borrowBook(301)).toBe("No book found with this ISBN No.");
    })

    test('should send error if book is already borrowed', () => {
        let lms = new LMS();
        lms.addBook(101, 'Maths', 'Kartik', 2019);
        lms.addBook(201, 'Science', 'Krishna', 2014)
        lms.borrowBook(201);
        expect(lms.borrowBook(201)).toBe(`The book "Science" is already borrowed`);
    })

    test('should be borrowed book successfully', () => {
        let lms = new LMS();
        lms.addBook(101, 'Maths', 'Kartik', 2019);
        expect(lms.borrowBook(101)).toBe(`"Maths" Book Borrowed successfully`);
    })

    test('should return error messages for missing or invalid input when returning a book', () => {
        let lms = new LMS();
        lms.addBook(101, 'Maths', 'Kartik', 2019);
        lms.borrowBook(101);
        expect(lms.returnBook()).toBe("Please enter an ISBN number");
        expect(lms.returnBook("101")).toBe("ISBN number must be a number");
    })

    test('should return error message if ISBN No. not found to return book', () => {
        let lms = new LMS();
        lms.addBook(101, 'Maths', 'Kartik', 2019);
        lms.borrowBook(101);
        expect(lms.returnBook(201)).toBe("No book found with this ISBN No.");
    })

    test('should return error message if book is not borowed when returning book', () => {
        let lms = new LMS();
        lms.addBook(101, 'Maths', 'Kartik', 2019);
        expect(lms.returnBook(101)).toBe(`The book is not currently borrowed`);
    })  

    test('should be returned book successfully', () => {
        let lms = new LMS();
        lms.addBook(101, 'Maths', 'Kartik', 2019);
        lms.borrowBook(101);
        expect(lms.returnBook(101)).toBe(`"Maths" book returned successfully`);
    })

    test('should return empty array if books are not available', () => {
        let lms = new LMS();
        lms.addBook(101, 'Maths', 'Kartik', 2019);
        lms.borrowBook(101);
        lms.addBook(201, 'Science', 'Krishna', 2014);
        lms.borrowBook(201);
        expect(lms.viewAvailableBooks()).toEqual([]);
    })

    test('should return a list of all available books after adding multiple books', () => {
        let lms = new LMS();
        lms.addBook(101, 'Maths', 'Kartik', 2019);
        lms.addBook(201, 'Science', 'Krishna', 2014);
        lms.addBook(301, 'English', 'Manan', 2010);
        let expectedOutput = [{
            isbnNo: 101,
            title: 'Maths',
            author: 'Kartik',
            publishedYear: 2019,
            isBorrowed: false
        }, {
            isbnNo: 201,
            title: 'Science',
            author: 'Krishna',
            publishedYear: 2014,
            isBorrowed: false
        }, {
            isbnNo: 301,
            title: 'English',
            author: 'Manan',
            publishedYear: 2010,
            isBorrowed: false
        }];
        expect(lms.viewAvailableBooks()).toEqual(expectedOutput);
    })
})