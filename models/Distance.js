const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var DistanceSchema = new Schema({
    code: { type: String, required: true },
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

DistanceSchema.pre('save', function(next) {
    this.created_at = Date.now;
    next();
});

var DistanceModel = mongoose.model('DistanceModel', DistanceSchema);

module.exports = DistanceModel;