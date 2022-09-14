//import controller
const heroController = require("../controllers/hero.controller.js")

//define routes
module.exports = app => {
    //create a new hero - post
    app.post("/api/hero/new", heroController.createHero)

    //display all heroes - get
    app.get("/api/heroes", heroController.findAllHeroes)

    //display one hero - get(with id)
    app.get('/api/hero/:id', heroController.displayHero)

    //update a hero - put(with id)
    app.put("/api/hero/:id", heroController.updateHero)

    //delete a hero - delete(with id)
    app.delete("/api/hero/:id", heroController.deleteHero)
}

