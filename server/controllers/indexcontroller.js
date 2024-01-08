const Category = require('../models/category')
const Product = require('../models/product')
const {server} = require('../config')
const fs = require('fs')



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

exports.fetchAllProducts = (req,res,next)=>{
    Product
    .find({productType:'Product'})
    .populate('categoryId')
    .populate('userId')
    .then(products=>{
        return res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{products,msg:'Products fetched successfully'}}}) 
    })
    .catch(error=>{
        console.log(error)
    })
}
exports.fetchAllServices = (req,res,next)=>{
    Product
    .find({productType:'Service'})
    .populate('categoryId')
    .populate('userId')
    .then(services=>{
        return res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{services,msg:'Services fetched successfully'}}}) 
    })
    .catch(error=>{
        console.log(error)
    })
}
exports.fetchSingleProduct = (req,res,next)=>{
    const {id} = req.params
    Product
    .findOne({productType:'Product',_id:id})
    .populate('categoryId')
    .populate('userId')
    .then(product=>{
        if(!product){
            return res.status(400).json({success:false,body:{status:400,title:'Verification Error',data:[{path:'id',msg:`No product found with id=${id} please verify id`,value:id,location:'params',type:'route parameter'}]}})    
        }
        return res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{product,msg:'Product fetched successfully'}}}) 
    })
    .catch(error=>{
        console.log(error)
    })
}
exports.fetchSingleService = (req,res,next)=>{
    const {id} = req.params
    Product
    .findOne({productType:'Service',_id:id})
    .populate('categoryId')
    .populate('userId')
    .then(service=>{
        if(!service){
            return res.status(400).json({success:false,body:{status:400,title:'Verification Error',data:[{path:'id',msg:`No Service found with id=${id} please verify id.`,value:id,location:'params',type:'route parameter'}]}})    
        }
        return res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{service,msg:'Service fetched successfully'}}}) 
    })
    .catch(error=>{
        console.log(error)
    })
}
exports.createNewProduct = (req,res,next)=>{
    const body = req.body;
    const imagesArr = []
    const images = req.files
    for(let image of images) {
       imagesArr.push({url:`${server}`+`${image.destination}${image.filename}`.slice(8)})
    }
    Product.create({
       productName:body.productName,
       categoryId:body.categoryId,
       productType:body.productType,
       header:body.header,
       link:{
           text:body.linkText,
           url:body.linkUrl
       },
       description:body.description,
       images:imagesArr,
       additionalDetails:{
        gender:body.gender,
        seller:body.seller,
        quantity:body.quantity,
        address:body.address,
        services:body.services
       },
       prices:{
      initialPrice:body.initialPrice,
      discount:body.discount
       },
       userId:req.user._id
    })
    .then(product=>{
        return res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{product,msg:'Single product inserted successfully'}}}) 
    })
    .catch(error=>{
        console.log(error)
    })
   }
   
   exports.fetchRelatedProducts = (req,res,next)=>{
    const {id,productType} = req.body
    Product
    .find({productType:productType,categoryId:id})
    .populate('categoryId')
    .populate('userId')
    .then(products=>{
        return res.status(200).json({success:true,body:
            {status:200,title:'Response Success',data:
            {products,msg:'Related Products fetched successfully'}}}) 
    })
    .catch(error=>{
        console.log(error)
    })
   }
   exports.deleteProductImage = (req,res,next)=>{
    const {prodId,imgId} = req.body
    Product.findOne({_id:prodId,userId:req.user._id})
    .then(product=>{
        if(!product){
            return res.status(400).json({success:false,body:{status:400,title:'Verification Error',data:[{path:'id',msg:`No product found with id associated with this user please verify id.`,value:prodId,location:'params',type:'route parameter'}]}})    
        }
       return product.removeImage(imgId)
        .then(product=>{
            return res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{product,msg:'Product image was successfully removed'}}}) 
        })
    })
    .catch(error=>{
        console.log(error)
    })
   }
   exports.deleteProduct = (req,res,next)=>{
    const {id} = req.params
    Product.findOneAndDelete({_id:id,userId:req.user._id})
    .then(product=>{
        if(!product){
            return res.status(400).json({success:false,body:{status:400,title:'Verification Error',data:[{path:'id',msg:`No product found with id associated with this user please verify id.`,value:prodId,location:'params',type:'route parameter'}]}})    
        }
        const prodImages = product.images
        console.log(prodImages)
        for(let image of prodImages){
            fs.unlinkSync(image.url.replace(server,'./public'))
        }
            return res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{product,msg:'Product was successfully removed'}}}) 
    })
    .catch(error=>{
        console.log(error)
    })
   }
   exports.updateProduct = (req,res,next)=>{
    const {id} = req.params
    const body = req.body
    const imagesArr = []
    const images = req.files
    for(let image of images) {
       imagesArr.push({url:`${server}`+`${image.destination}${image.filename}`.slice(8)})
    }
    Product.findById(id)
    .then(product=>{
        if(!product){
            return res.status(400).json({success:false,body:{status:400,title:'Verification Error',data:[{path:'id',msg:`No product found with id associated with this user please verify id.`,value:prodId,location:'params',type:'route parameter'}]}})    
        } 
        product.productName = body.productName
        product.header = body.header
        product.link.text = body.linkText
        product.link.url = body.linkUrl
        product.description = body.description
        product.images = [...product.images,...imagesArr]
        product.additionalDetails.gender = body.gender
        product.additionalDetails.quantity = body.quantity
        product.additionalDetails.address = body.address
        product.additionalDetails.services = body.services
        product.prices.initialPrice = body.initialPrice
        product.prices.discount = body.discount
        return product.save()
        .then(updatedProduct=>{
            return res.status(200).json({success:true,body:{status:200,title:'Response Success',data:{product:updatedProduct,msg:'Product was successfully updated'}}}) 
        })
    })
    .catch(error=>{
        console.log(error)
    })

   }

