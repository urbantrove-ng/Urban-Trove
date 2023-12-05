
exports.user = (req,res,next)=>{
    if(req.user.role !== "user"){
        return res.status(401).json({success:false,body:{status:401,title:'Unauthorized Request',data:{location:'headers',path:'authorization',field:'token',msg:"User is not authenticated"}}})
    }
    next()
}
exports.admin = (req,res,next)=>{
    if(req.user.role !== "admin"){
        return res.status(401).json({success:false,body:{status:401,title:'Unauthorized Request',data:{location:'headers',path:'authorization',field:'token',msg:"User is not authenticated"}}})  
    }
    next()
}