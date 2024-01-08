const { Router } = require('express')
const { imageUpload } = require('../middlewares/fileupload')
const { insertProduct, updateProduct, deleteProduct } = require('../controllers/productcontroller')
const router = Router()

router.route('/')
    .get((req, res, next) => { res.send('GET request not allowed') })
    .post(imageUpload.array('images', 10), insertProduct)
    .put(imageUpload.array('images', 10), updateProduct)
    .delete(deleteProduct)


module.exports = router