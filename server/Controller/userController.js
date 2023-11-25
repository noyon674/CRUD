//import files
const User = require('../Models/userModel');


//home controller
const HomeRoute = (req, res)=>{
    User.find({})
    .then((result)=>{
        return res.json(result);
    })
    .catch((err)=>console.log(err))
}

//user create controller
const CreateUser = async(req, res)=>{
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    });

    await newUser.save()
    .then((newUser)=>{
        res.json(newUser);
    })
};

//user update controller
const UpdateUser = (req, res)=>{
    const id = req.params.id;
    User.findByIdAndUpdate({_id: id}, {name:req.body.name, email: req.body.email, age: req.body.age})
    .then(result=>res.json(result))
    .catch(err=>res.json(err));
};

//get user by id
const getUser = (req, res)=>{
    const id = req.params.id;
    User.find({_id:id})
    .then(result=>res.json(result))
    .catch(err=>{res.json(err)})
}

//delete user by id
const deleteUser = (req, res)=>{
    const id = req.params.id;
    User.findByIdAndDelete({_id: id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
}
//export controller
module.exports = {CreateUser, UpdateUser, HomeRoute, getUser, deleteUser};