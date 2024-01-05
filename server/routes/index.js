const {Router} = require('express')
const router = Router()
const {auth} = require('../middlewares/auth')
const controller = require('../controllers/indexcontroller')
const {imageUpload} = require('../middlewares/fileupload')

router
.route('/category/:type')
.get(controller.getCategoriesByType)
router
.route('/products')
.get(controller.fetchAllProducts)
router
.route('/services')
.get(controller.fetchAllServices)
router
.route('/product/:id')
.get(controller.fetchSingleProduct)
router
.route('/service/:id')
.get(controller.fetchSingleService)
router
.route('/product')
.post([auth],[imageUpload.array('image'),controller.createNewProduct])

module.exports = router