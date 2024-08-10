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
})