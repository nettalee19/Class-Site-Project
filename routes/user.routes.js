const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const auth = require('../middleware/authStudent')

const Users = require('../models/users.models');

router.get('/',auth, (req,res) =>{
    userController.getUsers(req,res)
})

router.get('/me',auth, (req,res) =>{
    res.send(req.student)
})

router.post('/', (req,res) =>{
    userController.addUser(req,res)
})

router.put('/me', (req,res) =>{ //add auth
    userController.updateMeStudent(req,res)
})

router.delete('/me', (req,res) =>{ //add auth
    userController.deleteMeStudent(req,res)
})

router.post('/login', async(req,res) =>{
    try{
        const student = await Users.findByCredentials(req.body.email, req.body.password)
        const token = await student.generateAuthToken()
        res.send({ student, token })
        //res.send({ student })
    }catch(e){
        res.status(400).send()
    }
})

router.post('/logout', auth, async (req,res) =>{
    try{
        req.student.tokens = req.student.tokens.filter((token) =>{
            return token.token !== req.token
        })
        await req.student.save()

        res.send()
    }catch(e){
        res.status(500).send()
    }
})

router.post('/logoutAll', auth, async (req,res) =>{
    try{
        req.student.tokens = []
        await req.student.save()

        res.send()
    }catch(e){
        res.status(500).send()
    }
})



module.exports = router;