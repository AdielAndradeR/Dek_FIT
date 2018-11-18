const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Aerobic = require('../models/aerobic');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /aerobic'
    });
});

router.post('/', (req, res, next) => {
    const aerobic =new Aerobic({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        time: req.body.time
    })
    aerobic.save()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });
    res.status(201).json({
        message: 'Handling POST requests to /aerobic'
    });
});

router.get('/:aerobicId', (req, res, next) => {
    const aerobicId = req.params.aerobicId;
    res.status(200).json({
        message: 'Handling GEt requests to ' + aerobicId
    });
});

router.patch('/:aerobicId', (req, res, next) => {
    const aerobicId = req.params.aerobicId;
    res.status(200).json({
        message: 'Handling PATCH requests to ' + aerobicId
    });
});

router.delete('/:aerobicId', (req, res, next) => {
    const aerobicId = req.params.aerobicId;
    res.status(200).json({
        message: 'Handling DELETE requests to ' + aerobicId
    });
});


module.exports = router;