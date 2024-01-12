
module.exports = (req,res,next)=>{
    res.status(404).json({
        success:false,
        title:'Not Found',
        body:{
            status:404,
            data:{
                msg:'The resources requested for cannot be found on the server',
                value:req.originalUrl,
                path:'endpoint/route'
            }
        }
    })  
}