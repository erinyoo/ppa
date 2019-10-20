const express = require('express');
let router = express.Router();
let controller = require('../controllers/bmi.js');

router.get('/', controller.getBMI);

router.post('/', controller.sendBMI);

module.exports = router;