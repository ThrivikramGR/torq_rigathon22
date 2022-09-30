const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const qualitySchema = new Schema({
    nodeId: {
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
    tds: {
        type: Number,
        required: true
    },
    tss: {
        type: Number,
        required: true
    },
    pH: {
        type: Number,
        required: true
    },
    turbidity: {
        type: Number,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    disOxygen: {
        type: Number
    }
});

module.exports = mongoose.model('quality', qualitySchema);