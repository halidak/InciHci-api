const express = require('express');
const router = express.Router();
const productController = require('../../controllers/productController');

router.put('/:productId', productController.updateById);

module.exports = router;
