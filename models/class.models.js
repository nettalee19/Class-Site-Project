const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken') 

const classSchema = new mongoose.Schema({
    // id:{
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    name:{
        type: String,
        required: true,
        unique: false
    },
    description:{
        type: String,
        required: true,
        unique: false
    },
    subjects:{
        type: Array,
        unique: false
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'teachers'
    },
    // tokens:[{
    //     token:{
    //         type: String,
    //         required: true
    //     }
    // }],
    avatar:{
        type: Buffer
    }
})



// AccountsSchema.virtual('tasks', {
//     ref: 'tasks',
//     localField:'_id',
//     foreignField:'owner'

// }) 

const Class = mongoose.model('lessons', classSchema)


module.exports= Class;