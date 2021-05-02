const Teachers = require('../models/teachers.models')

const getTeachers = async (req,res) =>{
    const teachers = await Teachers.find()
    return res.send(teachers)

}

const addTeachers = async (req,res) =>{
    const {id, name, age, password, email, subjects}  = req.body
    
        const newTeacher = new Teachers({
            id : id, 
            name: name, 
            age: age,
            password: password,
            email: email,
            subjects: subjects
        })
        
        console.log(newTeacher)
        newTeacher.save((err) => {
            if (err) return res.status(400).send({"error": err})
            return res.status(200).send({"success": newTeacher})
        });
}


//need update
// const updateMeTeacher = async (req,res) =>{
//     const updates = Object.keys(req.body)
//     const allowedUpdate = ["id", "name", "age", "email","password", "subjects"]
//     const isValidOperation = updates.every((update) => allowedUpdate.includes(update))

//     if(!isValidOperation) {
//         return res.status(400).send({error: 'Updates are not valid'})
//     }
//     try{
//         updates.forEach((update) => req.user[update] = req.body[update])
//         await req.user.save()
//         res.send(req.user)
//     }
//     catch(e){
//         res.status(500).send(e)
//     }
// }

// //need update
// const deleteMeTeacher = async (req,res) =>{
//     try{
//         const task = await Teachers.findOneAndDelete({ _id: req.params.id, owner:req.user._id })
//         if(!task){
//             return res.status(404).send()
//         }

//         res.send(task)
//     }
//     catch(e){
//         res.status(500).send()
//     }
// }



module.exports = {
    addTeachers,
    getTeachers,
    //updateMeTeacher,
    //deleteMeTeacher
}