const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');

router.get('/:userId', authController.getUserById);

module.exports = router;