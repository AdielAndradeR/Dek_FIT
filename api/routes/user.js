const express = require('express');
const router = express.Router();

//create user
router.post('/', (req, res, next) => {
    const user = {
        name: req.body.name,
        age: req.body.age,
        type: req.body.type
    };
    res.status(200).json({
        message: 'Handling POST requests to /user',
        user
    });
});

// editing user
router.patch('/:teacherID', (req, res, next) => {
    const teacherID = req.params.teacherID;
    res.status(200).json({
        message: 'Handling PATCH requests to ' + teacherID
    });
});

router.get('/:userID', (req, res, next) => {
    const userID = req.params.userID;
    res.status(200).json({
        message: 'Handling GEt requests to list of studends of teacher ' + userID
    });
});


// getting student's list
router.get('/:teacherID', (req, res, next) => {
    const teacherID = req.params.teacherID;
    res.status(200).json({
        message: 'Handling GEt requests to list of studends of teacher ' + teacherID
    });
});

// adding student to a teacher's list
router.post('/:teacherID/:userID', (req, res, next) => {
    const teacherID = req.params.teacherID;
    const userID = req.params.userID;
    res.status(200).json({
        message: 'Handling POST requests to ' + teacherID + ' ' + userID
    });
});

// remove student from teacher's list
router.delete('/:teacherID/:userID', (req, res, next) => {
    const teacherID = req.params.teacherID;
    const userID = req.params.userID;
    res.status(200).json({
        message: 'Handling DELETE requests to '+ teacherID + ' ' + userID
    });
});


module.exports = router;