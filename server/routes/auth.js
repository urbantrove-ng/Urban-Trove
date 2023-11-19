const {Router} = require('express');
const router = Router();
const controller = require('../controllers/authcontroller');
const {user,password,email,resetToken} = require('../middlewares/validation')

router
.route('/signup')
.post([user,password],controller.signup)
router
.route('/signin')
.post([email,password],controller.signin)
router
.route('/forgot_password')
.post([email],controller.forgotPassword)
.patch([resetToken,password],controller.resetPassword)

module.exports = router