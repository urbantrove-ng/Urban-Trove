
module.exports = (err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const errorStack = process.env.NODE_ENV === "development"?err.stack:'Contact the developers to know more about this error'
    res.status(statusCode).json({
        success:false,
        title:'Something went wrong',
        body:{
            status:statusCode,
            data:{
                msg:err.message,
                stack:errorStack,
                value:err.value,
                path:err.path
            }
        }
    })
}