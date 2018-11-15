const express = require('express');
const app =  express();
const morgan = require('morgan');

const training = require('./api/routes/training');
const aerobic = require('./api/routes/aerobic');

app.use(morgan('dev'));


app.use('/training' , training);
app.use('/aerobic' , aerobic);

//handling errors

app.use((req,res,next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

app.use((err , req, res, next) =>{
    res.status(err.status || 500);
    res.json({
        "error" :{
            message: err.message
        }
    });
});

module.exports = app;


