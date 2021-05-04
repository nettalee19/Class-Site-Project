const express = require('express');
const router = express.Router();
const teacherController = require('../controller/teacher.controller');
const auth = require('../middleware/auth')

const Teachers = require('../models/teachers.models');

router.get('/',auth, (req,res) =>{
    teacherController.getTeachers(req,res)
})

router.get('/me',auth, (req,res) =>{
    res.send(req.teacher)
})

router.post('/', (req,res) =>{
    teacherController.addTeachers(req,res)
})

router.put('/me', auth, (req,res) =>{ //add auth
    teacherController.updateMeTeacher(req,res)
})

router.delete('/me',auth ,(req,res) =>{ //add auth
    teacherController.deleteMeTeacher(req,res)
})






router.post('/login', async(req,res) =>{
    //teacherController.addTeachers(req,res)
    try{
        const teacher = await Teachers.findByCredentials(req.body.email, req.body.password)
        const token = await teacher.generateAuthToken()
        res.send({ teacher, token })
    }catch(e){
        res.status(400).send()
    }
})

router.post('/logout', auth, async (req,res) =>{
    try{
        req.teacher.tokens = req.teacher.tokens.filter((token) =>{
            return token.token !== req.token
        })
        await req.teacher.save()

        res.send()
    }catch(e){
        res.status(500).send()
    }
})

router.post('/logoutAll', auth, async (req,res) =>{
    try{
        req.teacher.tokens = []
        await req.teacher.save()

        res.send()
    }catch(e){
        res.status(500).send()
    }
})


module.exports = router;