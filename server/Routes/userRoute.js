const { CreateUser, UpdateUser, HomeRoute, getUser, deleteUser } = require('../Controller/userController');

//import files
const Router = require('express').Router();

//all routes
Router.get('/', HomeRoute);
Router.post('/create', CreateUser);
Router.put('/update/:id', UpdateUser);
Router.get('/getUser/:id', getUser);
Router.delete('/deleteUser/:id', deleteUser)

//export router
module.exports = Router;