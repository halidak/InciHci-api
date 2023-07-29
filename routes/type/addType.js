const express = require('express');
const router = express.Router();
const typeController = require('../../controllers/typeContoller');

router.post('/', typeController.addType);

module.exports = router;