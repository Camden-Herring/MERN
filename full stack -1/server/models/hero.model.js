//import mongoose
const mongoose = require('mongoose');

//creaate a database table 
const HeroSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, 'Name is required!'],
        minLength: [3, 'name must be at least 3 characters!']
    },
    rating: {
        type: Number,
        required: [true, 'Rating is required!'],
        min: [0, "minimum rating is 0!"],
        max: [10, "maximum rating is 10!"]
    },
    img: {
        type: String,
        required: [true, 'image url is required']
    }
})

//register our new collection(Schema)
const Hero = mongoose.model("Hero", HeroSchema);

module.exports = Hero;
