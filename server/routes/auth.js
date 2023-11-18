const {Router} = require('express');
const router = Router();
const controller = require('../controllers/authcontroller');
const {user,password,email} = require('../middlewares/validation')

router
.route('/signup')
.post([user,password],controller.signup)

router
.route('/signin')
.post([email,password],controller.signin)

module.exports = router