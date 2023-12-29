const {Router} = require('express')
const router = Router()
const {auth} = require('../middlewares/auth')
const {admin} = require('../middlewares/role')
const controller = require('../controllers/admincontroller')
const {imageUpload} = require('../middlewares/fileupload')
const {catName,catType} = require('../middlewares/validation')

router
.route('/categories')
.get([auth,admin],[controller.getAllCategories])
.post([auth,admin],[imageUpload.single('image'),catName,catType],controller.addNewCategory)
router
.route('/category/:id')
.get([auth,admin],[controller.getCategory])
.patch([auth,admin],[imageUpload.single('image'),catName,catType],controller.updateCategory)
.delete([auth,admin],[controller.deleteCategory])



module.exports = router