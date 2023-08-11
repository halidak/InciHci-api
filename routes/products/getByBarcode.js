const express = require('express');
const router = express.Router();
const productController = require('../../controllers/productController');

router.get('/:barCode', productController.getByBarcode);

module.exports = router;