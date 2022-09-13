const mongoose = require("mongoose")
const database = "jokeSchema"

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Squatting 405 on: ${database}`))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));