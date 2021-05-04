const jwt = require('jsonwebtoken') 
const Users = require('../models/users.models')

const getUsers = async (req,res) =>{
    const users = await Users.find()
    return res.send(users)

}

const addUser = async (req,res) =>{
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

        const student = new Users(req.body)
        try{
            await student.save()
            const token = await student.generateAuthToken()
            res.status(201).send({ student, token})
        }catch(e){
            res.status(400).send(e)
        }
}

const updateMeStudent = async (req,res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdate = ["id", "name", "age", "email","password"]
    const isValidOperation = updates.every((update) => allowedUpdate.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({error: 'Updates most only be regarding credit amount'})
    }
    try{
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    }
    catch(e){
        res.status(500).send(e)
    }
}

const deleteMeStudent = async (req,res) =>{
    try{
        await req.student.remove()
        res.send(req.student)
    }
    catch(e){
        res.status(500).send()
    }
}



module.exports = {
    addUser,
    getUsers,
    updateMeStudent,
    deleteMeStudent
}