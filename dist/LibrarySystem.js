"use strict";
// 📚 Create a simple Library System where users can add books, borrow books, return books, and check availability.
// 1. Create an enum called BookGenre with at least 5 book genres.
// 2. Create a type alias called Book which contains: bookId (number), title (string), author (string), genre (BookGenre), isAvailable (boolean).
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.
var BookGenre;
(function (BookGenre) {
    BookGenre[BookGenre["Fantasy"] = 0] = "Fantasy";
    // add 4 more
    BookGenre[BookGenre["Mystery"] = 1] = "Mystery";
    BookGenre[BookGenre["Romance"] = 2] = "Romance";
    BookGenre[BookGenre["ScienceFiction"] = 3] = "ScienceFiction";
    BookGenre[BookGenre["Thriller"] = 4] = "Thriller";
})(BookGenre || (BookGenre = {}));
var library = [];
function addBook(bookId, title, author, genre, isAvailable) {
    if (isAvailable === void 0) { isAvailable = true; }
    var newBook = {
        bookId: bookId,
        title: title,
        author: author,
        genre: genre,
        isAvailable: isAvailable
    };
    library.push(newBook);
    return newBook;
}
function borrowBook(bookId) {
    var book = library.find(function (book) { return book.bookId === bookId; });
    if (book.isAvailable) {
        book.isAvailable = false;
        return "".concat(book.title, " has been borrowed");
    }
    else {
        return "".concat(book.title, " is not available");
    }
}
function returnBook(bookId) {
    var book = library.find(function (book) { return book.bookId === bookId; });
    if (!book.isAvailable) {
        book.isAvailable = true;
        return "".concat(book.title, " has been returned");
    }
    else {
        return "".concat(book.title, " is not available");
    }
}
function checkAvailability(bookId) {
    var book = library.find(function (book) { return book.bookId === bookId; });
    return book.isAvailable;
}
function removeBook(bookId) {
    var book = library.find(function (book) { return book.bookId === bookId; });
    if (book) {
        library = library.filter(function (book) { return book.bookId !== bookId; });
        return "".concat(book.title, " has been removed from the library");
    }
    else {
        return 'Not found';
    }
}
// Test cases (Create more if needed)
console.log(addBook(1, "The Hobbit", "J.R.R. Tolkien", BookGenre.Fantasy)); // { bookId: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genre: BookGenre.Fantasy, isAvailable: true }
console.log(borrowBook(1)); // "The Hobbit has been borrowed"
console.log(checkAvailability(1)); // false
console.log(returnBook(1)); // "The Hobbit has been returned"
console.log(removeBook(1)); // "The Hobbit has been removed from the library"
