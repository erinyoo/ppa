var BMI = require('../models/bmi.js');
var bmi = require('../functions/bmi.js');

exports.getBMI = function(req, res) {
    BMI.find({}, function(err, bmis) {
        if(err) res.status(400).send(err);
        else res.send(bmis);
    })
    // BMI.find().exec(function(err, bmis) {
    //     if(err) res.status(400).send(err);
    //     else res.send(bmis);
    // });
};

exports.sendBMI = function(req, res) {
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
            res.status(200).send(bodyMass);
        }
    });
};