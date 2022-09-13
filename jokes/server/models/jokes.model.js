const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "please provide a setup"],
        minLength: [3, "setup must be at least 3 characters"]
    },
    punchline: {
        type: String,
        required: [true, 'please provide a punchline!'],
        minLength: [3, "punchline must be at least 3 characters"]
    },
    
})

const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke