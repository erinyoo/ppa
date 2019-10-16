var Distance = require('../models/Distance.js');

exports.getAllDistance = function(req, res) {
    Distance.find().sort('code').exec(function(err, distances) {
		if(err) res.status(400).send(err);
		else res.json(distances);
	});
};

exports.createNewDistance = function(req, res) {
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
			res.json(distanceFound);
		}
	});
};