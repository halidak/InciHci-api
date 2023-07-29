const express = require('express');
const router = express.Router();
const commentController = require('../../controllers/commentController');

router.get('/:productId', commentController.getCommentsForProduct);

module.exports = router;