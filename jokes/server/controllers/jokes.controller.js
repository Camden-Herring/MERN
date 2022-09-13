const Joke = require("../models/jokes.model");

module.exports.showAllJokes = (req, res) => {
    Joke.find()
        .then(foundJokes=>{
            res.json({results: foundJokes})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke=>{
            res.json({results: newJoke})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.findOneJoke = (req, res)=>{
    Joke.findOne({_id:req.params.id})
        .then((foundJoke)=>{
            res.json({results: foundJoke})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.updateJoke = (req,res)=>{
    Joke.findOneAndUpdate(
        {_id:req.params.id}, 
        req.body, 
        {new:true, runValidators:true} //set the new option to true to return the document after update was applied
        )
        .then(updatedJoke =>{
            res.json({results: updatedJoke})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error:err})
        })
}

module.exports.deleteJoke = (req,res)=>{
    Joke.deleteOne({_id: req.params.id})
        .then(deletedJoke =>{
            res.json({results: deletedJoke})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}