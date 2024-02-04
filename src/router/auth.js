const express = require("express");
const router = express.Router();
const authValidation = require('../middleware/authValidation')
const authController = require('../controllers/authController')
router.route('/register')
    .get(authController.getRegister)
    .post(authController.postRegister)

router.route('/login')
    .get(authController.getLogin)
    .post(authController.postLogin)
    
router.route('/logout')
    .post(authController.postLogout)

router.route('/users' )
    .get(authController.getUsers);
module.exports = router