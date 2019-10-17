const BMI = require('../models/bmi.js');
const Distance = require('../models/distance.js');

var appRouter = function(app) {
    app.get('/bmi', function(req, res) {
        BMI.find().exec(function(err, bmis) {
            if(err) res.status(400).send(err);
            else res.status(200).json(bmis);
        });
    });

    app.get('/distance', function(req, res) {
        Distance.find().sort('code').exec(function(err, distances) {
            if(err) res.status(400).send(err);
            else res.status(200).json(distances);
        });
    });

    app.post('/bmi', function(req, res) {
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
    });

    app.post('/distance', function(req, res) {
        var distanceFound = new Distance();
	    distanceFound.inputs = {
            x1: req.body.x1,
            y1: req.body.y1,
            x2: req.body.x2,
            y2: req.body.y2
	    };
	    distanceFound.outputs = {
		    distance: shortestDistance(coordinateValues.firstX, coordinateValues.firstY, coordinateValues.secondX, coordinateValues.secondY)
	    };
	    distanceFound.created_at = Date.now();

	    distanceFound.save(function(err) {
            if(err) {
                res.status(400).send(err);
            } else {
                res.status(200).json(distanceFound);
            }
	    });
    })
}

module.exports = appRouter;