const BookController = require("../controllers/book.controller");
const Book = require("../models/book.model");

module.exports = (app) => {
    //display all books
    app.get("/api/books", BookController.showAllBooks);

    //create new book
    app.post("/api/books", BookController.createBook);

    //Display one book
    app.get("/api/books/:id", BookController.findOneBook);

    //update one book
    app.put("/api/books/:id", BookController.updateBook);

    //delete one book
    app.delete("/api/books/:id", BookController.deleteBook);
}