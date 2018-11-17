const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /funtional'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /funtional'
    });
});

router.get('/:funtionalId', (req, res, next) => {
    const funtionalId = req.params.funtionalId;
    res.status(200).json({
        message: 'Handling GEt requests to ' + funtionalId
    });
});

router.patch('/:funtionalId', (req, res, next) => {
    const funtionalId = req.params.funtionalId;
    res.status(200).json({
        message: 'Handling PATCH requests to ' + funtionalId
    });
});

router.delete('/:funtionalId', (req, res, next) => {
    const funtionalId = req.params.funtionalId;
    res.status(200).json({
        message: 'Handling DELETE requests to ' + funtionalId
    });
});


module.exports = router;