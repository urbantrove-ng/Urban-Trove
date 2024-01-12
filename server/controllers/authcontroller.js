const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user')
const {jwt_secret,jwt_expires} = require('../config')
const crypto = require('crypto')

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
       //Email function call should be here
       res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{...createdUser,accessToken:token,msg:'Registration was successful'}}})
    })
    .catch(error=>{
        next(error)
    })
}
exports.signin = (req,res,next)=>{
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(422).json({success:false,body:{status:422,title:'Validation Error',data:errors}})
  }
  const {email,password} = req.body
  User.findOne({email:email})
  .then(user=>{
   if(!user){
    return res.status(400).json({success:false,body:{status:400,title:'Authentication Error',data:[{path:'email',msg:'Incorrect email address',value:email,location:'body',type:'field'}]}})
   }
   return bcrypt.compare(password,user.password)
   .then(doMatch=>{
    if(!doMatch){
    return res.status(400).json({success:false,body:{status:400,title:'Authentication Error',data:[{path:'password',msg:'Incorrect paswsord',value:password,location:'body',type:'field'}]}})  
    }
    const token = jwt.sign({_id:user._id},jwt_secret,{expiresIn:jwt_expires})
    //Email function call should be here
    res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{...user,accessToken:token,msg:'User Logged in successfully'}}})
   })
  })
  .catch(err=>{
    next(err)
  })
}
exports.forgotPassword = (req,res,next)=>{
const errors = validationResult(req)
if(!errors.isEmpty()){
  return res.status(422).json({success:false,body:{status:422,title:'Validation Error',data:errors}})
}
const {email} = req.body
const resetToken = crypto.randomBytes(32).toString('hex')
const resetTokenExpires = Date.now() + 3600000
User.findOne({email:email})
.then(user=>{
  if(!user){
    return res.status(400).json({success:false,body:{status:400,title:'Authentication Error',data:[{path:'email',msg:'Email is not linked to any account',value:email,location:'body',type:'field'}]}}) 
  }
  user.resetToken = resetToken
  user.resetTokenExpires = resetTokenExpires
  return user.save()
  .then(saved=>{
    //Email function call should be here
    res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{...saved,msg:'Reset link has been successfully sent'}}}) 
  })
})
.catch(err=>{
  next(err)
})
}
exports.resetPassword = (req,res,next)=>{
  const errors = validationResult(req)
if(!errors.isEmpty()){
  return res.status(422).json({success:false,body:{status:422,title:'Validation Error',data:errors}})
}
  const {resetToken,password} = req.body
  User.findOne({resetToken:resetToken,resetTokenExpires:{$gt:Date.now()}})
  .then(user=>{
    if(!user){
      return res.status(400).json({success:false,body:{status:400,title:'Authentication Error',data:[{path:'resetToken',msg:'Invalid token session',value:email,location:'body',type:'field'}]}})  
    }
    return bcrypt.hash(password,12)
    .then(hashedPassword=>{
    user.password = hashedPassword
    user.resetToken = undefined
    user.resetTokenExpires = undefined
    return user.save()
    })
    .then(saved=>{
    //Email function call should be here
    res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{...saved,msg:'Password reset was successful'}}}) 
    })
  })
  .then(err=>{
    next(err)
  })
}