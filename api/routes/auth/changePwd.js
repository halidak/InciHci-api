const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');

router.put('/:userId', authController.changePassword);

module.exports = router;