//---------------methods to be used-----------

/*

1. createHero
2. findALlHeroes
3. displayHero
4. updateHero
5. deleteHero

*/

const Hero = require("../models/hero.model");

//create a Hero
module.exports.createHero = (req, res) => {
    Hero.create(req.body)
    .then(newHero => {
        res.json({results: newHero})
    })
    .catch((err) => {res.json({err:err})})
}

//display all heroes
module.exports.findAllHeroes = (req, res) => {
    Hero.find()
    .then((allHeroes)=>{
        res.json({results: allHeroes})
    })
    .catch((err) => {res.json({err:err})})
}

//display one hero
module.exports.displayHero = (req, res) => {
    Hero.findOne({_id: req.params.id})
    .then((hero)=>{
        res.json({results: hero})
    })
    .catch((err) => {res.json({err:err})})
}

module.exports.updateHero = (req, res) => {
    Hero.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then((updatedHero) => {
        res.json({results: updatedHero})
    })
    .catch((err) => {res.json({err:err})})
}

module.exports.deleteHero = (req, res) => {
    Hero.deleteOne({_id: req.params.id})
    .then((deletedHero)=>{
        res.json({results: deletedHero})
    })
    .catch((err) => {res.json({err:err})})
}
