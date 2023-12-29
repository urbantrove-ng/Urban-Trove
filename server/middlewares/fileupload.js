const multer = require('multer')

const fileStorageEngine = multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,'./public/uploads/')
    },
    filename:function(req,file,cb){
        return cb(null,Date.now()+'--'+file.originalname)
    }
})

const imageFileFilter = function(req,file,cb){
    if(file.mimetype === 'image/jpeg'|| file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
        return cb(null,true)
    }else{
        return cb(null,false)
    }
}

exports.imageUpload = multer({storage:fileStorageEngine,fileFilter:imageFileFilter})