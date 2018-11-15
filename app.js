const express = require('express');
const app =  express();

const training = require('./api/routes/training');
const aerobic = require('./api/routes/aerobic');

app.use('/training' , training);

app.use('/aerobic' , aerobic);

module.exports = app;


