const {Schema,model} = require('mongoose')
const categorySchema = new Schema({
    categoryName:{
    required:true,
    type:String
    },
    categoryType:{
     required:true,
     type:String,
    },
    image:String,
    createdAt:Date,
    updatedAt:Date,
})

module.exports = model('Category',categorySchema)

