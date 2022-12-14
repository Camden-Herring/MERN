//import express 
const express = require('express');

//import mongoose
const mongoose = require('mongoose');

//import cors
const cors = require("cors")

//creaate instance of express
const app = express();

//select our port
const port = 8000;

//use express and return json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//enable cors
app.use(cors());

//connect to mongoose config
require("./config/mongoose.config");

//import routes and include (app) for express
const heroapp = require("./routes/hero.routes");
heroapp(app)

//listen for connections on specified port
app.listen(port, ()=>{
    console.log(`Benching 315 on port ${port}`);
})


/*
1. install express
2. install mongoose
3. install cors
*/

//-------------front end------------
/*
1. axios
2. react-router-dom
3. bootstrap

ex. npm install axios react-router-dom react-bootstrap bootstrap
4. be sure to import bootstrap into app.js file! -------import "bootstrap/dist/css/bootstrap.min.css";-------

*/ 