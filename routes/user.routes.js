const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

//const Users = require('../models/users.models');

router.get('/', (req,res) =>{
    userController.getUsers(req,res)
})

router.post('/', (req,res) =>{
    userController.addUser(req,res)
})


module.exports = router;