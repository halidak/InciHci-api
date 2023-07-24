const express = require('express');
const router = express.Router();
const compositionController = require('../../controllers/compositionController');

router.post('/', compositionController.addComposition);

module.exports = router;