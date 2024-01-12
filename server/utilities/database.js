const mongoose = require('mongoose')
const {database_uri} = require('../config')

module.exports = ()=>{
   return mongoose.connect(database_uri,{
    dbName:'urbantrovedb',
    autoIndex:false,
   //  tls:true,
   })
}