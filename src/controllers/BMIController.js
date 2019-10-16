var BMI = require('../models/BMI.js');

exports.getAllBMI = function(req, res) {
    BMI.find().exec(function(err, bmis) {
		if(err) res.status(400).send(err);
		else res.json(bmis);
	});
};

exports.createNewBMI = function(req, res) {
    var bodyMass = new BMI();
	bodyMass.inputs = {
		height_feet: req.body.feet,
		height_inches: req.body.inches,
		weight: req.body.weight
	};
	bodyMass.outputs = {
		bmi_index: bmi(req.body.feet, req.body.inches, req.body.weight).number,
		bmi_classification: bmi(req.body.feet, req.body.inches, req.body.weight).category
	};
	bodyMass.created_at = Date.now();

	bodyMass.save(function(err) {
		if(err) {
			res.status(400).send(err);
		} else {
			res.json(bodyMass);
		}
	});
};