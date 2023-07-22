const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');

// POST request to /verify
router.post('/', authController.handleVerify);

module.exports = router;
