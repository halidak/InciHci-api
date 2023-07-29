const express = require('express');
const router = express.Router();
const likeController = require('../../controllers/likeController');

router.post('/', likeController.addLike);

module.exports = router;