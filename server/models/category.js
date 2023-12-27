const {Schema,Model} = require('mongoose')
const categorySchema = new Schema({
    categoryName:{
        required:true,
        type:String
    },
    image:String,
    createdAt:Date,
    updatedAt:Date,
})

module.exports = Model('Category',categorySchema)

