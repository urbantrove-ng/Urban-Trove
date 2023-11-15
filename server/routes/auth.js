const {Router} = require('express');
const router = Router();
const controller = require('../controllers/authcontroller');
const {user,password} = require('../middlewares/validation')

router
.route('/signup')
.post([user,password],controller.signup)

module.exports = router