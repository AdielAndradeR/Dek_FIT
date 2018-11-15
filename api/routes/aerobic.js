const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /aerobic'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /aerobic'
    });
});

router.get('/:aerobicId', (req, res, next) => {
    const aerobicId = req.params.aerobicId;
    res.status(200).json({
        message: 'Handling GEt requests to ' + aerobicId
    });
});


module.exports = router;