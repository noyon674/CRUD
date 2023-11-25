//import files
const express = require('express');
const cors = require('cors');
const userRoutes = require('./Routes/userRoute');

//create app server
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//databse connection with app
require('./Config/dbConnect');

//all routes
app.use(userRoutes);

//export server
module.exports = app;