const prodManagerController = require("../controllers/prodmanager.controller");

module.exports = app => {
    //create a new product
    app.post("/api/products/new", prodManagerController.createProduct);

    //display all products
    app.get("/api/products", prodManagerController.findAllProducts);

    //display one product - get with {id}
    app.get("/api/product/:id", prodManagerController.oneProduct);

    //update a product - put with {id}
    app.put("/api/product/update/:id", prodManagerController.updateProduct);

    //delete a product - delete with {id}
    app.delete("/api/product/delete/:id", prodManagerController.deleteProduct);
}