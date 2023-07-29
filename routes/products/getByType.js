const express = require('express');
const router = express.Router();
const productController = require('../../controllers/productController');

router.get('/:typeId', productController.getProductsByType);

module.exports = router;