
exports.user = (req,res,next)=>{
    if(req.user.role !== "user"){
        return res.status(403).json({success:false,body:{status:401,title:'Unauthorized Request',data:{location:'database',path:'user',field:'role',msg:"User is not authorized"}}})
    }
    next()
}
exports.admin = (req,res,next)=>{
    if(req.user.role !== "admin"){
        return res.status(403).json({success:false,body:{status:401,title:'Unauthorized Request',data:{location:'database',path:'user',field:'role',msg:"User is not authorized"}}})  
    }
    next()
}