const mongoose = require('mongoose');

const ProdManagerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'please provide a title!'],
        minLength : [3, 'Minimum length is 3!']
    },
    price: {
        type: Number,
        required: [true, 'please provide a price!'],
        min: [0, 'minimum price is $0!']
        
    },
    description: {
        type: String,
        required: [true, 'please provide a description!'],
        minLength: [3, 'minimum length is 3!']
    }

})

const ProdManager = mongoose.model("ProdManager", ProdManagerSchema);

module.exports = ProdManager;