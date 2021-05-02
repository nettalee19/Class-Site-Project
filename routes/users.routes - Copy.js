const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');
const Accounts = require('../models/accounts.models');
const Transctions = require('../models/transaction.models');
const Task = require('../models/Tasks.models');

const auth = require('../middleware/auth')
const multer = require('multer')
const sharp = require('sharp')

// router.get('/', (req,res) =>{
//     //return res.status(200).json({users : users})
//     userController.getAllUsers(req,res)

//     // const token = await user.generateAuthToken()
//     // res.status(201).send({ user, token })

// })
router.get('/me', auth, async(req, res) =>{
    // try{
    //     const users = await Accounts.find({})
    //     return res.send(users)
    // }catch(e){
    //     return res.status(500).send()
    // }

    return res.send(req.user)
})

.post('/', (req,res) =>{
    userController.addUser(req,res)
}).get('/:id/user',(req,res) =>{
    userController.getUserById(req,res)
}).put('/:id/deposit', (req,res) =>{
    userController.deposit(req,res)
}).put('/:id/credit', (req,res) =>{
    userController.updateCredit(req,res)
}).put('/:id/withdraw', (req,res) =>{
    userController.withdrawMoney(req,res)
}).put('/transfer',(req,res)=>{
    userController.transferMoney(req,res)
}).get('/alltransactions',(req,res)=>{
    userController.getAllTransactions(req,res)
}).post('/login', async (req,res) =>{
    //userController.Login(req,res)
    try{
        const user = await Accounts.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    }catch(e){
        res.status(400).send()
    }
})

router.post('/logout', auth, async (req,res) =>{
    try{
        req.user.tokens = req.user.tokens.filter((token) =>{
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    }catch(e){
        res.status(500).send()
    }
})

router.post('/logoutAll', auth, async (req,res) =>{
    try{
        req.user.tokens = []
        await req.user.save()

        res.send()
    }catch(e){
        res.status(500).send()
    }
})

router.delete('/me',auth,  async (req,res) =>{
    try{
        // const user= await Accounts.findByIdAndDelete(req.user._id)

        // if(!user){
        //     return res.status(404).send()
        // }
        await req.user.remove()
        res.send(req.user)
    }
    catch(e){
        res.status(500).send()
    }
})


//update
router.put('/me', auth, async (req,res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdate = ["credit", "cash", "email","password"]
    const isValidOperation = updates.every((update) => allowedUpdate.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({error: 'Updates most only be regarding credit amount'})
    }
    try{
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)

        // updates.forEach((update) => {
        //     return req.user[update] = req.body[update]
        // })
        // req
    }
    catch(e){
        res.status(500).send(e)
    }
})

//new task
router.post('/tasks', auth, async(req,res) =>{

    //const trans = new Transctions(req.user)

    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
    try{
        await task.save()
        res.status(201).send(task)

    }catch(e){
        res.status(400).send(e)
    }
})

//task by id
router.get('/tasks/:id', auth, async(req,res) =>{
    const _id = req.params.id

    try{
        const task = await Task.findOne({ _id, owner: req.user._id })
        
        if(!task){
            return res.status(404).send()
        }

        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})

//get task
router.get('/tasks', auth, async(req,res) =>{

    try{
        //const tasks = await Task.find({ owner: req.user._id })
        await req.user.populate('tasks').execPopulate()
        res.send(req.user.tasks)

    }catch(e){
        res.status(500).send(e)
    }
})

//update task by id
router.put('/tasks/:id', auth, async(req,res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdate = ["description", "completed"]
    const isValidOperation = updates.every((update) => allowedUpdate.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates'})
    }

    try{
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })
        
        
        if(!task){
            return res.status(404).send()
        }
        
        updates.forEach((update) => task[update] = req.body[update])
        await task.save()
        res.send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

//delete task
router.delete('/tasks/:id',auth,  async (req,res) =>{
    try{
        // const user= await Accounts.findByIdAndDelete(req.user._id)

        const task = await Task.findOneAndDelete({ _id: req.params.id, owner:req.user._id })
        if(!task){
            return res.status(404).send()
        }

        res.send(task)
    }
    catch(e){
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
        const user= await Accounts.findById(req.params.id)

        if(!user || !user.avatar){
            throw new Error()
        }

        res.set('Content-Type','image/jpg')
        res.send(user.avatar)
    }catch(e){
        res.status(404).send()
    }
})




module.exports = router;