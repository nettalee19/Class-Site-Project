const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken') 

const UsersSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
        unique: false
    },
    age:{
        type: Number,
        required: true,
        default: 0,
        unique: false
    },
    password:{
        type: String,
        
    },
    email:{
        type: String,
        unique: true
    },
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }],
    avatar:{
        type: Buffer
    }
})



// AccountsSchema.virtual('tasks', {
//     ref: 'tasks',
//     localField:'_id',
//     foreignField:'owner'

// }) 

UsersSchema.methods.toJSON = function (){
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    //delete userObject.avatars


    return userObject
}

// //generates the token, users can log out of one device and stay connected in another
UsersSchema.methods.generateAuthToken = async function (){
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, "teacher")
    
    user.tokens = user.tokens.concat({ token })
    await user.save()
    
    return token
}

UsersSchema.statics.findByCredentials = async(email, password) =>{
    const user = await Users.findOne({email: email})

    if(!user){
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw new Error('Unable to login')
    }

    return user
}

UsersSchema.pre('save', async function (next) {
    const user = this

    //console.log("just before saving")
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

// //Delete user tasks when user is removed
// AccountsSchema.pre('remove',async function(next){
//     const user = this
//     await Task.deleteMany({ owner: user._id })
//     next()
// })

const Users = mongoose.model('students', UsersSchema)


module.exports= Users;