const {Schema,model} = require('mongoose')

const userSchema = new Schema({
    username:String,
    googleId:Number,
    twitterId:Number,
    facebookId:Number,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
      required:true
    },
    role:{
      type:String,
      required:true
    },
    resetToken:String,
    resetTokenExpires:Date
})

module.exports = model('User',userSchema)