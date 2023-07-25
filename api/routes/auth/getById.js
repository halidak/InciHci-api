const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');

// POST request to /verify
router.get('/:userId', authController.getUserById);

module.exports = router;