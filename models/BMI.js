const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var BMISchema = new Schema({
    inputs: {
        height_feet: { type: Number, required: true },
        height_inches: { type: Number, required: true },
        weight: { type: Number, required:true }
    },
    outputs: {
        bmi_index: { type: Number, required:true },
        bmi_classification: { type: String, required:true }
    },
    created_at: Date
});

var BMIModel = mongoose.model('BMIModel', BMISchema);

module.exports = BMIModel;