const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const qualitySchema = new Schema({
    nodeId: {
        type: String,
        required: true
    },
    atmosphericTemperature:{
        type: String,
        required: true
    },
    waterTemperature: {
        type: String,
        required: true
    },
    turbidity: {
        type: String,
        required: true
    },
    tds: {
        type: String,
        required: true
    },
    tss: {
        type: String,
        required: true
    },
    pH: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
    },
    disOxygen: {
        type: String
    }
});

module.exports = mongoose.model('quality', qualitySchema);