const express = require('express');
const router = express.Router();
const teacherController = require('../controller/teacher.controller');
const auth = require('../middleware/auth')
const multer = require('multer')
const sharp = require('sharp')
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








const upload = multer({
    //dest: 'avatars',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('Please upload a JPG/JPEG/PNG document'))
        }
        cb(undefined, true)
    }
})

router.post('/me/avatar', auth, upload.single('avatar'), async (req,res) =>{
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250}).png().toBuffer()
    req.user.avatar = buffer
    await req.user.save()
    res.send()
}, (error, req, res, next) =>{
    res.status(400).send({error: error.message})
})

router.delete('/me/avatar', auth, async (req,res) =>{
    req.user.avatar = undefined
    await req.user.save()
    res.send()
})

router.get('/:id/avatar', async (req,res) =>{
    try{
        const teacher= await Teachers.findById(req.params.id)

        if(!teacher || !teacher.avatar){
            throw new Error()
        }

        res.set('Content-Type','image/jpg')
        res.send(teacher.avatar)
    }catch(e){
        res.status(404).send()
    }
})


module.exports = router;