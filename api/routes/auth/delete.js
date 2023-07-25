const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');

// POST request to /verify
router.delete('/:userId', authController.deleteUser);

module.exports = router;