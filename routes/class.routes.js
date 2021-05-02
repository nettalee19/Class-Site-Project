const express = require('express');
const router = express.Router();
const classController = require('../controller/class.controller');

//const Users = require('../models/users.models');

router.get('/', (req,res) =>{
    classController. getAllClass(req,res)
})

router.post('/', (req,res) =>{
    classController.addNewClass(req,res)
})

// router.put('/me', (req,res) =>{ //add auth
//     teacherController.updateMeTeacher(req,res)
// })

// router.delete('/me', (req,res) =>{ //add auth
//     teacherController.deleteMeTeacher(req,res)
// })


module.exports = router;