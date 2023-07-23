const express = require('express');
const router = express.Router();
const likeController = require('../../controllers/likeController');

router.delete('/', likeController.removeLike);

module.exports = router;