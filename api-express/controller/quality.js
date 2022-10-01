const express = require('express');
const quality = require('../models/quality');
const router = express.Router();

const Quality = require('../models/quality');

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.post('/putData', (req, res) => {
    Quality.create({
        nodeId: req.body.nodeId,
        lat: req.body.lat,
        long: req.body.long,
        tds: req.body.tds,
        tss: req.body.tss,
        pH: req.body.pH,
        turbidity: req.body.turbidity,
        waterTemperature: req.body.waterTemperature,
        atmosphericTemperature: req.body.atmosphericTemperature,
        disOxygen: req.body.disOxygen
    }).then((quality) => {
        return res.status(201).json({success: true, message: "Data Added Successfully"});    
    }).catch((err) => {
        return res.status(500).json({success: false, message: err.message});
    });
});

router.get('/getAllData', (req, res) => {
    Quality.find({}).then((qual) => {
        return res.status(200).json({success: true, quality: qual});
    }).catch((err) => {
        return res.status(500).json({success: false, message: err.message});
    });
});

router.get('/getByNode/:nodeId', (req, res) => {
    Quality.find({nodeId: req.params.nodeId})
    .then((values) => {
        return res.status(200).json({success: true, values: values});
    }).catch((err) => {
        return res.status(500).json({success: false, message: err.message});
    });
});

module.exports = router;
