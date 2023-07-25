const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');

// POST request to /verify
router.put('/:userId', authController.updateUser);

module.exports = router;