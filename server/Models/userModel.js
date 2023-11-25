//import files
const mongoose = require('mongoose');

//userschema
const userShema = mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

//create model
const Users = mongoose.model('user', userShema);

//export model
module.exports = Users;