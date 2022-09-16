//import express 
const express = require('express');

//create an instance of express 
const app = express();

//import mongoose
const mongoose = require('mongoose');

//import cors
const cors = require("cors")

//select our port
const port = 8000;

//impor

//use express and return json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//enable cors 
app.use(cors());

//connect to mongoose config
require("./config/mongoose.config");

//import routes and include app for express
const productapp = require("./routes/prodmanager.routes");
productapp(app);

//listen for connections on specified port
app.listen(port, ()=>{
    console.log(`Benching 315 on port ${port}`)
})