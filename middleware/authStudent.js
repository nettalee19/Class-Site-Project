const jwt = require('jsonwebtoken')
const students= require('../models/users.models')

const auth = async(req,res,next) =>{
    console.log(req.header('authorization'))
    
    try{
        
        const token = req.header('Authorization').replace('Bearer ','')
        console.log(token)
        const decoded = jwt.verify(token, 'teacher') //token valid and not expired
        const student = await students.findOne({ _id:  decoded._id, 'tokens.token': token}) //find user with an id to match the auth token
        if(!student){
            throw new Error()
        }

        req.token = token
        req.student = student
        next()
    } catch(e){
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth



