const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var DistanceSchema = new Schema({
    inputs: {
        x1: { type: Number, required: true },
        y1: { type: Number, required: true },
        x2: { type:Number, required:true },
        y2: { type:Number, required:true }
    },
    outputs: {
        distance: { type:Number, required:true }
    },
    created_at: Date
});

var DistanceModel = mongoose.model('DistanceModel', DistanceSchema);

module.exports = DistanceModel;