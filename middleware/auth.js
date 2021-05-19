const jwt = require('jsonwebtoken')
const teachers= require('../models/teachers.models')

const auth = async(req,res,next) =>{
    //console.log('auth middleware2')
    // next()

    try{

        const token = req.header('Authorization').replace('Bearer ','')
        // console.log(token)
        const decoded = jwt.verify(token, 'teacher') //token valid and not expired
        const teacher = await teachers.findOne({ _id:  decoded._id, 'tokens.token': token}) //find user with an id to match the auth token
        if(!teacher){
            throw new Error()
        }

        req.token = token
        req.teacher = teacher
        next()
    } catch(e){
        res.status(401).send({ error: 'Please authenticate.' })
        //return res.status(401).send(e)
    }
}

module.exports = auth



