var express = require('express');
var router = express.Router();
var BMIController = require('../controllers/BMIController.js');

router.get('/bmi', BMIController.getAllBMI);

router.post('/bmi', BMIController.createNewBMI);

module.exports = router;