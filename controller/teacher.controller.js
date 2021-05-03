const jwt = require('jsonwebtoken') 
//const auth = require('../middleware/auth')
const Teachers = require('../models/teachers.models')

const getTeachers = async (req,res) =>{
    const teachers = await Teachers.find()
    return res.send(teachers)

}

const addTeachers = async (req,res) =>{
    // const {id, name, age, password, email, subjects}  = req.body
    
    //     const newTeacher = new Teachers({
    //         id : id, 
    //         name: name, 
    //         age: age,
    //         password: password,
    //         email: email,
    //         subjects: subjects
    //     })
        
    //     console.log(newTeacher)
    //     newTeacher.save((err) => {
    //         if (err) return res.status(400).send({"error": err})
    //         return res.status(200).send({"success": newTeacher})
    //     });

    const teacher = new Teachers(req.body)
    try{
        await teacher.save()
        const token = await teacher.generateAuthToken()
        res.status(201).send({ teacher, token})
    }catch(e){
        res.status(400).send(e)
    }
}



const updateMeTeacher = async (req,res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdate = ["id", "name", "age", "email","password", "subjects"]
    const isValidOperation = updates.every((update) => allowedUpdate.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({error: 'Updates are not valid'})
    }
    try{
        updates.forEach((update) => req.teacher[update] = req.body[update])
        await req.teacher.save()
        res.send(req.teacher)
    }
    catch(e){
        res.status(500).send(e)
    }
}


const deleteMeTeacher = async (req,res) =>{
    try{
        //const teacher = await Teachers.findOneAndDelete({ _id: req.params.id, owner:req.user._id })
        // const teacher = await Teachers.findOneAndDelete(req.params.id)
        // if(!teacher){
        //     return res.status(404).send()
        // }
        await req.teacher.remove()
        res.send(req.teacher)
    }
    catch(e){
        res.status(500).send()
    }
}



module.exports = {
    addTeachers,
    getTeachers,
    updateMeTeacher,
    deleteMeTeacher
}