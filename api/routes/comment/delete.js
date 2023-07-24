const express = require('express');
const router = express.Router();
const commentController = require('../../controllers/commentController');

router.delete('/:commentId', commentController.deleteComment);

module.exports = router;