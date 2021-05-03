const express = require('express');
const router = express.Router();
const classController = require('../controller/class.controller');
const auth = require('../middleware/auth')

const Lesson = require('../models/class.models');

router.get('/', (req,res) =>{
    classController. getAllClass(req,res)
})

router.get('/myclass',auth, (req,res) =>{
    classController. getAllClassByOwner(req,res)
})

// router.get('/:id', async(req,res) =>{
//     //classController. getClassById(req,res)

//     const _id = req.params.id

//     try{
//         const aClass = await Lesson.findOne({ _id, owner: req.user._id })
        
//         if(!aClass){
//             return res.status(404).send()
//         }

//         res.send(aClass)
//     }catch(e){
//         res.status(500).send(e)
//     }
// })

router.post('/', auth, (req,res) =>{
    classController.addNewClass(req,res)
})

router.put('/:id', (req,res) =>{ //add auth
    classController.updateClass(req,res)
})

// router.delete('/me', (req,res) =>{ //add auth
//     teacherController.deleteMeTeacher(req,res)
// })


module.exports = router;