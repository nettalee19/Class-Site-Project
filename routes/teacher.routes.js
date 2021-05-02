const express = require('express');
const router = express.Router();
const teacherController = require('../controller/teacher.controller');

//const Users = require('../models/users.models');

router.get('/', (req,res) =>{
    teacherController.getTeachers(req,res)
})

router.post('/', (req,res) =>{
    teacherController.addTeachers(req,res)
})

// router.put('/me', (req,res) =>{ //add auth
//     teacherController.updateMeTeacher(req,res)
// })

// router.delete('/me', (req,res) =>{ //add auth
//     teacherController.deleteMeTeacher(req,res)
// })


module.exports = router;