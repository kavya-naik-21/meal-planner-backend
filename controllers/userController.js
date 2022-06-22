const { response } = require('express')
const user = require('../models/userModel')

const register=(req,res,next)=>{
    console.log("register function called")
    console.log(req.body.name)
    let _user=new user({
        name:req.body.name,
        email:req.body.email,
        phoneNum:req.body.phoneNum,
        password:req.body.password
    })
    _user.save()
    .then(response=>{
        res.json({
            message:'User added successfully'
        })
    })
    .catch(error=>{
        res.json({
            message: error+" error occured"
        })
    })
}



module.exports={
    register
}