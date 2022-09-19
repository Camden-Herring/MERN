const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors())
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./config/mongoose.config");

const petapp = require("./routes/pet.routes");
petapp(app);

app.listen(port, ()=>{
    console.log(`Benching 315 on port ${port}`);
})