var express = require('express');
var router = express.Router();
var DistanceController = require('../controllers/DistanceController.js');

router.get('/distance', DistanceController.getAllDistance);

router.post('/distance', DistanceController.createNewDistance);

module.exports = router;