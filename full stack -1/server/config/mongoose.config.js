const mongoose = require('mongoose');

const database = "herodb";

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log(`Starkiller targeted to: ${database}`))
.catch((err)=>console.log('Starkiller, mission failed: ', err));
