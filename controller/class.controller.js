const Class = require('../models/class.models')

const getAllClass = async (req,res) =>{
    // const aClass = await Class.find()
    // return res.send(aClass)
    try{
        const lessons = await Class.find({})
        res.send(lessons)
    } catch(e){
        res.status(500).send()
    }
}

const getAllClassByOwner = async (req,res) =>{
    // const aClass = await Class.find()
    // return res.send(aClass)

    try{
        await req.user.populate('class').execPopulate()
        res.send(req.user.class)
    } catch(e){
        res.status(500).send()
    }
}

const addNewClass = async (req,res) =>{
    // const {name, description, subjects}  = req.body
    
    //     const newClass = new Class({ 
    //         name: name, 
    //         description: description,
    //         subjects: subjects
    //     })
        
    //     console.log(newClass)
    //     newClass.save((err) => {
    //         if (err) return res.status(400).send({"error": err})
    //         return res.status(200).send({"success": newClass})
    //     });

    const aClass = new Class({
        ...req.body,
        owner: req.teacher._id
    })

    try{
        await aClass.save()
        res.status(201).send(aClass)
    } catch(e){
        res.status(400).send(e)
    }
}



// const getClassById = async (req,res) =>{
//     const _id = req.params.id

//     try{
//         const lesson = await Class.findOne({ _id, owner: req.teacher._id })
        
//         if(!lesson){
//             return res.status(404).send()
//         }
//         res.send(lesson)
//     } catch(e){
//         res.status(500).send()
//     }
// }


//need update
const updateClass = async (req,res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdate = ["name", "description", "subjects"]
    const isValidOperation = updates.every((update) => allowedUpdate.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({error: 'Updates are not valid'})
    }
    try{
        const aClass = await Class.findById(req.params.id)
        //updates.forEach((update) => req.user[update] = req.body[update])
        updates.forEach((update) => aClass[update] = req.body[update])
        //await req.user.save()
        await aClass.save()
        
        if(!aClass){
            return res.status(404).send()
        }
        
        //res.send(req.user)
        res.send(aClass)
    }
    catch(e){
        res.status(500).send(e)
    }
}

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
    getAllClass,
    getAllClassByOwner,
    //getClassById,
    addNewClass,
    updateClass,
    //deleteMeTeacher
}