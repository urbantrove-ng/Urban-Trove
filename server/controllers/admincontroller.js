const Category = require('../models/category')
const {validationResult} = require('express-validator')
const fs = require('fs')

exports.getAllCategories = (req,res,next)=>{
    Category.find()
    .then(categories=>{
        res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{categories,msg:'Categories fetched successfully'}}}) 
    })
    .catch(error=>{
        next(error)
    })
}
exports.getCategory = (req,res,next)=>{
    const {id} = req.params
    Category.findById(id)
    .then(category=>{
        if(!category){
            return res.status(400).json({success:false,body:{status:400,title:'Verification Error',data:[{path:'id',msg:`No category found with id=${id} please verify id.`,value:id,location:'params',type:'route parameter'}]}})    
        }
        return res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{category,msg:'Single Category fetched successfully'}}}) 
    })
    .catch(error=>{
        next(error)
    })
}
exports.addNewCategory = (req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({success:false,body:{status:422,title:'Validation Error',data:errors}})
    }
    const {category_type,category_name} = req.body
    Category.create({
        categoryName:category_name,
        categoryType:category_type,
        createdAt:new Date(Date.now()),
        updatedAt:new Date(Date.now()),
        image:typeof req.file !== 'undefined'?`${req.file.destination}${req.file.filename}`.slice(8):null
    })
    .then(category=>{
        return res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{category,msg:'Single Category added successfully'}}}) 
    })
    .catch(error=>{
        next(error)
    })
}
exports.updateCategory = (req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({success:false,body:{status:422,title:'Validation Error',data:errors}})
    }
    const {category_type,category_name} = req.body
    const {id} = req.params
    Category.findById(id)
    .then(category=>{
        category.categoryName = category_name
        category.categoryType = category_type
        category.updatedAt = new Date(Date.now())
        category.image = typeof req.file !== 'undefined'?`${req.file.destination}${req.file.filename}`.slice(8):category.image
        return category.save()
    })
    .then(category=>{
        return res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{category,msg:'Single Category updated successfully'}}})   
    })
}
exports.deleteCategory = (req,res,next)=>{
    const {id} = req.params
    Category.findOneAndDelete({_id:id})
    .then(category=>{
        fs.unlinkSync(`./public${category.image}`)
        res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{category,msg:'Single Category deleted successfully'}}})   
    })
    .catch(error=>{
        next(error)
    })
}