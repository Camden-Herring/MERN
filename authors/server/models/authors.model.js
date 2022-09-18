const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Please provide an author name!'],
        minLength : [3, 'Minimum author length is 3 characters!']
    }
})


const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;