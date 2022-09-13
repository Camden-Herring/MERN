const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "please fill out title"],
        minLength: [1, "title must be at least 1 character long"]
    },
    author: {
        type: String,
        required: [true, "please fill out title"],
        minLength: [1, "author must be at least 1 character long"],
    },
    rating: {
        type: Number,
        required: [true, "please fill out the rating"],
        min: [0, "rating must be at least 0"],
        max: [5, "max rating is 5"]
    }
})

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;