const {Schema,model} = require('mongoose')

const userSchema = new Schema({
    username:String,
    googleId:Number,
    twitterId:Number,
    email:{
        type:String,
        required:true
    },
    password:String,
    role:{
      type:String,
      required:true
    },
    resetToken:String,
    resetTokenExpires:Date
})

module.exports = model('user',userSchema)