const petController = require("../controllers/pet.controller");

module.exports = app => {
    app.post("/api/pet/new", petController.createPet)
    app.get("/api/pets", petController.findAllPets)
    app.get("/api/pet/:id", petController.displayPet)
    app.put("/api/pet/update/:id", petController.updatePet)
    app.delete("/api/pet/delete/:id", petController.deletePet)
}

