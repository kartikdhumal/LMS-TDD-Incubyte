# Library Management System

This project is a Library Management System built using JavaScript. It allows users to perform basic library operations such as adding books, borrowing books, returning books, and viewing available books.

## Features

- **Add Books:** Add new books to the library with unique identifiers, titles, authors, and publication years.
- **Borrow Books:** Borrow available books and ensure they are not already borrowed.
- **Return Books:** Return borrowed books and update their availability.
- **View Available Books:** View a list of all books currently available in the library.

## Getting Started

To set up and run the project locally, follow these steps:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/kartikdhumal/LMS-TDD-Incubyte.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd LMS-TDD-Incubyte
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

### Running Tests

1. **Run Tests:**

   ```bash
   npm test
   ```

   After running `npm test`, you will see the results of the test cases, including details on passed and failed tests.

2. **Test Report**

   ```bash
   npm test -- --coverage
   ```

   This command will generate a test coverage report, showing the percentage of code covered by tests. It will include coverage details for statements, branches, functions, and lines.

