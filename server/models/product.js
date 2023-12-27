const {Model,Schema} = require('mongoose')

const productSchema = new Schema({
    productName:{
        type:String,
        required:true
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    header:{
     type:String,
     required:true
    },
    link:{
        text:String,
        url:String
    },
    description:{
        type:String,
        required:true
    },
    images:[
        {
            url:String,
            name:String
        }
    ],
    additionalDetails:{
        gender:String,
        seller:String,
        quantity:String,

    },
    prices:{
     initialPrice:String,
     discountedPrice:String,
     discount:String
    },
    reviews:[
        {
            customerName:String,
            review:String
        }
    ]
})