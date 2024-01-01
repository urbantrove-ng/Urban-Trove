const {Router} = require('express')
const router = Router()
const auth = require('../middlewares/auth')
const controller = require('../controllers/indexcontroller')

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

module.exports = router