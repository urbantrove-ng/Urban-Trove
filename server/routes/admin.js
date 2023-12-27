const {Router} = require('express')
const router = Router()
const {auth} = require('../middlewares/auth')
const {admin} = require('../middlewares/role')
const controller = require('../controllers/admincontroller')

router
.route('/category')

module.exports = router