/*
create
findAll
findOne
delete
update
*/

const ProdManager = require("../models/prodmanager.model");

module.exports.createProduct = (req, res) => {
    ProdManager.create(req.body)
    .then(newProduct => {
        res.json({results: newProduct})
    })
    .catch((err)=>{
        res.status(400).json({err:err})
    })
}

module.exports.findAllProducts = (req, res) => {
    ProdManager.find()
    .then(allProducts => {
        res.json({results: allProducts})
    })
    .catch((err)=>{
        res.json({err:err})
    })
}

module.exports.oneProduct = (req, res) => {
    ProdManager.findOne({_id: req.params.id})
    .then(product => {
        res.json({results: product})
    })
    .catch((err)=>{
        res.json({err:err})
    })
}

module.exports.updateProduct = (req, res) => {
    ProdManager.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then((updatedProduct) => {
        res.json({results: updatedProduct})
    })
    .catch((err) => {res.json({err:err})})
}

module.exports.deleteProduct = (req, res) => {
    ProdManager.deleteOne({_id: req.params.id})
    .then((deletedProduct)=>{
        res.json({results: deletedProduct})
    })
    .catch((err) => {res.json({err:err})})
}