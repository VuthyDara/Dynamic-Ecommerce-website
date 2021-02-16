const express = require('express');
const router = express.Router();
const userController = require('../../controllers/AuthController');
const productController = require('../../controllers/productController');

router.post('/route', userController.register)
router.post('/route', userController.login)
router.post('/route', productController.addProduct)


module.exports = router;