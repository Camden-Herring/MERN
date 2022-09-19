const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'please provide a pet name!'],
        minLength: [3, 'minimum name length is 3 characters!']
    },
    type: {
        type: String,
        required: [true, 'please provide a type!'],
        minLength: [3, 'minimum type length is 3 characters!']
    },
    description:{
        type: String,
        required: [true, 'please provide a description!'],
        minLength: [3, 'minimum description length is 3 characters!']
    },
    skillone:{
        type: String,
        required: [false, ''],
    },
    skilltwo:{
        type: String,
        required: [false, ''],
    },
    skillthree:{
        type: String,
        required: [false, ''],
    },
})

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;