const Product = require('../models/product')


exports.insertProduct = (req, res, next) => {
    const body = req.body
    Product.create({
        productName: body.productName,
        categoryId: body.categoryId,
        productType: body.productType,
        header: body.header,
        link: body.link,
        description: body.description,
        images: body.images,
        additionalDetails: body.additionalDetails,
        prices: body.prices,
        reviews: body.reviews,
        userId: body.userId,
    }).then(product => {
        return res.status(200).json({
            success: true,
            body: {
                status: 200, title: 'Response Success',
                data: { product, msg: 'Product added successfully' }
            }
        })
    }).catch(error => {
        res.send(error)
        console.log(error)
    })

}

exports.updateProduct = (req, res, next) => {
    const { id } = req.params
    Product.findById(id)
        .then(product => {
            product.productName = req.body.productName
            product.categoryId = req.body.categoryId
            product.productType = req.body.productType
            product.header = req.body.header
            product.link = req.body.link
            product.description = req.body.description
            product.images = req.body.images
            product.additionalDetails = req.body.additionalDetails
            product.prices = req.body.prices
            product.reviews = req.body.reviews
            product.userId = req.body.userId
            return product.save()
        })
        .then(updatedProduct => {
            return res.status(200).json({
                success: true,
                body: {
                    status: 200, title: 'Response Success',
                    data: { updatedProduct, msg: 'Product updated successfully' }
                }
            })
        })
        .catch(error => {
            res.send(error)
            console.log(error)
        })
}

exports.deleteProduct= (req,res,next)=>{
    const {id} = req.params
    Product.findOneAndDelete({_id:id}).then(deletedProduct=>{
        return res.status(200).json({
            success:true,
            body:{
                status:200,
                title:'Response Success',
                data:{deletedProduct,msg:'Product deleted successfully'}
            }
        })
    }).catch(error=>{
        res.send(error)
        console.log(error)
    })
}