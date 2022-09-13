const mongoose = require('mongoose');
const express = require('express');
const port = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./config/mongoose.config");
require("./routes/jokes.routes")(app);

app.listen(port, ()=>{
    console.log(`Benching 315 on port: ${port}`);
})