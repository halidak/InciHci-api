const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');

router.delete('/:userId', authController.deleteUser);

module.exports = router;