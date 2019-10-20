var Distance = require('../models/distance.js');
var distance = require('../functions/shortestdistance.js');


exports.getDistance = function(req, res) {
    Distance.find().sort('code').exec(function(err, distances) {
        if(err) res.status(400).send(err);
        else res.status(200).send(distances);
    });
};

exports.sendDistance = function(req, res) {
    var distanceFound = new Distance();
    distanceFound.inputs = {
        x1: req.body.x1,
        y1: req.body.y1,
        x2: req.body.x2,
        y2: req.body.y2
    };
    distanceFound.outputs = {
        distance: distance(req.body.x1, req.body.y1, req.body.x2, req.body.y2)
    };
    distanceFound.created_at = Date.now();
    distanceFound.save(function(err) {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(distanceFound);
        }
    });
};