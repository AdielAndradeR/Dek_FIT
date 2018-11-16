const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /muscle'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /muscle'
    });
});

router.get('/:muscleID', (req, res, next) => {
    const muscleID = req.params.muscleID;
    res.status(200).json({
        message: 'Handling GEt requests to ' + muscleID
    });
});

router.patch('/:muscleID', (req, res, next) => {
    const muscleID = req.params.muscleID;
    res.status(200).json({
        message: 'Handling PATCH requests to ' + muscleID
    });
});

router.delete('/:muscleID', (req, res, next) => {
    const muscleID = req.params.muscleID;
    res.status(200).json({
        message: 'Handling DELETE requests to ' + muscleID
    });
});


module.exports = router;