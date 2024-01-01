const {Router} = require('express')
const router = Router()
const auth = require('../middlewares/auth')
const controller = require('../controllers/indexcontroller')

router
.route('/category/:type')
.get(controller.getCategoriesByType)



module.exports = router