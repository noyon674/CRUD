//import files
require('dotenv').config();
const mongoose = require('mongoose');

//database link
const DBLINK = process.env.DB_LINK;

//create database connection
mongoose.connect(DBLINK)
.then(()=>{
    console.log('DataBase connection successful.');
})
.catch((err)=>{
    console.log(err.message);
    process.exit(true);
})

