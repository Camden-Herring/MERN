const authorController = require("../controllers/authors.controller");

module.exports = app => {
    app.post("/api/author/new", authorController.createAuthor)

    app.get("/api/authors", authorController.findAllAuthors)

    app.get("/api/author/:id", authorController.displayAuthor)

    app.put("/api/author/update/:id", authorController.updateAuthor)

    app.delete("/api/author/delete/:id", authorController.deleteAuthor)
}