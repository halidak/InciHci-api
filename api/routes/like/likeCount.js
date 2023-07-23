const express = require('express');
const router = express.Router();
const likeController = require('../../controllers/likeController');

router.get('/:productId', likeController.getLikes); 

module.exports = router;
