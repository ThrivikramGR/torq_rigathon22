const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}));

const User = require('../models/user');

router.post('/', (req, res) => {
    User.create({
        email: req.body.email,
        name: req.body.name,
        lat: req.body.lat,
        long: req.body.long,
        dateOfJoining: req.body.dateOfJoining
    }).then((user) => {
        return res.status(201).json({success: true, message: "Created Successfully", user: user});
    }).catch((err) => {
        return res.status(500).json({success: false, message: err.message});
    });
});

router.get('/', (req, res) => {
    User.find({}).then((users) => {
        return res.status(200).json({success: true, users: users});
    }).catch((err) => {
        return res.status(500).json({success: false, message: err.message});
    });
});

router.get('/:email', (req, res) => {
    const email = req.params.email;
    User.findOne({email: email}).then((user) => {
        if(user != null)
            return res.status(200).json({success: true, user: user});
        return res.status(404).json({success: false, message: "No user Found"});
    }).catch((err) => {
        return res.status(500).json({success: false, message: err.message});
    });
});

module.exports = router;