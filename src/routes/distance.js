const express = require('express');
let router = express.Router();
let controller = require('../controllers/distance.js');

router.get('/', controller.getDistance);

router.post('/', controller.sendDistance);

module.exports = router;