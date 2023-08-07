const express = require('express');
const router = express.Router();
const ratingController = require('../../controllers/ratingController');

router.get('/:productId', ratingController.getRating);

module.exports = router;