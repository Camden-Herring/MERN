const express = require('express');

const mongoose = require('mongoose');

const cors = require("cors");

const app = express();

const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

require("./config/mongoose.config");

const authorapp = require("./routes/authors.routes");
authorapp(app);

app.listen(port, ()=>{
    console.log(`Benching 315 on port ${port}`);
})



