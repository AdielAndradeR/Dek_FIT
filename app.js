const express = require('express');
const app =  express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const training = require('./api/routes/training');
const aerobic = require('./api/routes/aerobic');
const muscle = require('./api/routes/muscle');
const funtional = require('./api/routes/funtional');
const user = require('./api/routes/user');

mongoose.connect(
    'mongodb://AdielAR:<'
    + process.env.MONGO_ATLAS_PW +    
    '>@cluster0-shard-00-00-ovahe.mongodb.net:27017,cluster0-shard-00-01-ovahe.mongodb.net:27017,cluster0-shard-00-02-ovahe.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
    { useNewUrlParser: true }
   
);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method ===  'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


app.use('/training' , training);
app.use('/aerobic' , aerobic);
app.use('/muscle' , muscle);
app.use('/funtional' , funtional);
app.use('/user' , user);

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


