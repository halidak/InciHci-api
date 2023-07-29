const express = require('express');
const router = express.Router();
const typeController = require('../../controllers/typeContoller');

router.get('/', typeController.getAllTypes);

module.exports = router;