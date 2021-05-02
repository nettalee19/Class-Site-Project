const Users = require('../models/users.models')

const getUsers = (req,res) =>{
    // const users = await Users.find()
    // return res.send(users)

    console.log("hello")
}

const addUser = (req,res) =>{
    // const {id, name, age, password, email}  = req.body
    
    //     const newUser = new Users({
    //         id : id, 
    //         name: name, 
    //         age: age,
    //         password: password,
    //         email: email
    //     })
        
    //     console.log(newUser)
    //     newUser.save((err) => {
    //         if (err) return res.status(400).send({"error": err})
    //         return res.status(200).send({"success": newUser})
    //     });
    console.log("hello")
}



module.exports = {
    addUser,
    getUsers
}