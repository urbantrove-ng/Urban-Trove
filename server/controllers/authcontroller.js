const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user')
const {jwt_secret,jwt_expires} = require('../config')

exports.signup = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({success:false,body:{status:422,title:'Validation Error',data:errors}});
    }
    const {email,password} = req.body
    bcrypt.hash(password,12)
    .then(hashedPassword=>{
      return User.create({
        email:email,
        password:hashedPassword,
        role:'user'
      })
    })
    .then(createdUser=>{
       const token = jwt.sign({_id:createdUser._id},jwt_secret,{expiresIn:jwt_expires})
       res.status(200).json({success:true,body:{status:200,title:'Response Ok',data:{...createdUser,accessToken:token,msg:'Registration was successful'}}})
    })
    .catch(error=>{
        console.log(error)
    })
}