const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken') 

const TeachersSchema = new mongoose.Schema({
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
    subjects:{
        type: Array,
        unique: false
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



TeachersSchema.virtual('lessons', {
    ref: 'Lesson',
    localField:'_id',
    foreignField:'owner'

}) 

TeachersSchema.methods.toJSON = function (){
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    //delete userObject.avatars


    return userObject
}

//generates the token, users can log out of one device and stay connected in another
TeachersSchema.methods.generateAuthToken = async function (){
    const teacher = this
    const token = jwt.sign({_id: teacher._id.toString()}, "teacher")
    
    teacher.tokens = teacher.tokens.concat({ token })
    await teacher.save()
    
    return token
}

TeachersSchema.statics.findByCredentials = async(email, password) =>{
    const teacher = await Teachers.findOne({email: email})

    if(!teacher){
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, teacher.password)

    if(!isMatch){
        throw new Error('Unable to login')
    }

    return teacher
}

TeachersSchema.pre('save', async function (next) {
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

const Teachers = mongoose.model('teachers', TeachersSchema)


module.exports= Teachers;