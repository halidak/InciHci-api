const express = require('express');
const router = express.Router();
const productController = require('../../controllers/productController');

router.get('/:userId', productController.allUserProducts);

module.exports = router;