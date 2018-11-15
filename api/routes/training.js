const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /training'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /training'
    });
});

router.get('/:trainingID', (req, res, next) => {
    const trainingID = req.params.trainingID;
    res.status(200).json({
        message: 'Handling GEt requests to ' + trainingID
    });
});

router.patch('/:trainingID', (req, res, next) => {
    const trainingID = req.params.trainingID;
    res.status(200).json({
        message: 'Handling PATCH requests to ' + trainingID
    });
});

router.delete('/:trainingID', (req, res, next) => {
    const trainingID = req.params.trainingID;
    res.status(200).json({
        message: 'Handling DELETE requests to ' + trainingID
    });
});


module.exports = router;