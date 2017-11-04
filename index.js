var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
// var userType = ["admin","manager","cashier","member","therapist","walk_in"];

var app = express();



// midleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));
app.use('/', require('./routes/publicRoutes'));
// app.use('/', require('./routes/commonRoutes'));


app.listen(8000);

/*user: "thisAdmin",
    pwd: "ZxCaSdQwE1@3",
    */


