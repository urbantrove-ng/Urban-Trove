const Category = require('../models/category')


exports.getCategoriesByType = (req,res,next)=>{
    const {type} = req.params
    Category.find({categoryType:type})
    .then(categories=>{
        return res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{categories,msg:'Single Category fetched successfully'}}}) 
    })
    .catch(error=>{
        console.log(error)
    })
}