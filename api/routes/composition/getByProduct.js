const express = require('express');
const router = express.Router();
const compositionController = require('../../controllers/compositionController');

router.get('/:productId', compositionController.getAllCompositionsForProduct);

module.exports = router;