const express = require('express');
const router = express.Router();
const classController = require('../controller/class.controller');
const auth = require('../middleware/auth')
const Lesson = require('../models/class.models');


router.get('/', (req,res) =>{
    classController. getAllClass(req,res)
})

router.get('/myclass',auth, async (req,res) =>{
    // classController. getAllClassByOwner(req,res)
    console.log("hi netta")
    try{
        //const tasks = await Task.find({ owner: req.user._id })
        await req.teacher.populate('lessons').execPopulate()
        res.send(req.teacher.lessons)

    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/:id', auth, async(req,res) =>{
    //console.log("hi bro")
    //classController. getClassById(req,res)

    // const _id = req.params.id

    // try{
    //     const lesson = await Lesson.findOne({"owner": req.teacher._id })
        
    //     if(!lesson){
    //         return res.status(404).send()
    //     }

    //     res.send(lesson)
    // }catch(e){
    //     res.status(500).send(e)
    // }

    const _id = req.params.id
    console.log(_id)
    try{
        //const task = await Lesson.findOne({ _id, owner: req.user._id })
        const task = await Lesson.findOne({ _id, owner: req.teacher._id })
        
        if(!task){
            return res.status(404).send()
        }

        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }

})

router.post('/', auth, (req,res) =>{
    classController.addNewClass(req,res)
    
})

router.put('/:id', (req,res) =>{ //add auth
    classController.updateClass(req,res)
})

router.delete('/:id',auth, async(req,res) =>{ //add auth
    try{
        // const user= await Accounts.findByIdAndDelete(req.user._id)

        const task = await Lesson.findOneAndDelete({ _id: req.params.id, owner:req.teacher._id })
        if(!task){
            return res.status(404).send()
        }

        res.send(task)
    }
    catch(e){
        res.status(500).send()
    }
})


module.exports = router;