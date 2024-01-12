const passport = require('../config/passport')
const jwt = require("jsonwebtoken")
const {jwt_secret,jwt_expires} = require('../config')

exports.auth = (req,res,next)=>{
    passport.authenticate("jwt",(err,user,info)=>{
      if(!user){
        return res.status(401).json({success:false,body:{status:401,title:'Authentication Error',data:{location:'headers',path:'authorization',field:'token',msg:"User is not authenticated"}}})
      }
      req.user = user
      next()
    })(req,res,next)
}
exports.googleOauth = (req,res,next)=>{
    passport.authenticate("google",(err,user,info)=>{
        if(err){
            return res.status(400).json({success:false,body:{status:400,title:'Authentication Error',data:[{path:'email',msg:err.msg,value:null,location:'oauth',type:'google-oauth'}]}}) 
        }
        if(!user){
            return res.status(400).json({success:false,body:{status:400,title:'Authentication Error',data:[{path:'email',msg:"Google Oauth was unsuccessful",value:null,location:'oauth',type:'google-oauth'}]}})    
        }
        const token = jwt.sign({_id:user._id},jwt_secret,{expiresIn:jwt_expires})
        res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{...user,accessToken:token,msg:'User Logged in successfully'}}})

    })(req,res,next)
}
exports.twitterOauth = (req,res,next)=>{
    passport.authenticate('twitter',(err,user,info)=>{
        if(err){
            return res.status(400).json({success:false,body:{status:400,title:'Authentication Error',data:[{path:'email',msg:err.msg,value:null,location:'oauth',type:'twitter-oauth'}]}}) 
        }
        if(!user){
            return res.status(400).json({success:false,body:{status:400,title:'Authentication Error',data:[{path:'email',msg:"Twitter Oauth was unsuccessful",value:null,location:'oauth',type:'twitter-oauth'}]}})    
        }
        const token = jwt.sign({_id:user._id},jwt_secret,{expiresIn:jwt_expires})
        res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{...user,accessToken:token,msg:'User Logged in successfully'}}})

    })(req,res,next)
}
exports.facebookOauth = (req,res,next)=>{
    passport.authenticate('facebook',(err,user,info)=>{
        if(err){
            return res.status(400).json({success:false,body:{status:400,title:'Authentication Error',data:[{path:'email',msg:err.msg,value:null,location:'oauth',type:'facebook-oauth'}]}}) 
        }
        if(!user){
            return res.status(400).json({success:false,body:{status:400,title:'Authentication Error',data:[{path:'email',msg:"Facebook Oauth was unsuccessful",value:null,location:'oauth',type:'facebook-oauth'}]}})    
        }
        const token = jwt.sign({_id:user._id},jwt_secret,{expiresIn:jwt_expires})
        res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{...user,accessToken:token,msg:'User Logged in successfully'}}})
    })(req,res,next)
}