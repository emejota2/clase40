const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginController')

router.post('/', loginController.loginController)
router.post('/registro', loginController.registerController)


module.exports = router;