var express = require('express')
const bodyParser = require("body-parser");
var math = require('mathjs')
const fs = require('fs')
var logger = require('morgan');

var calcRouter = require('./app/calc/router');
var quoteRouter = require('./app/quote/router');


var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'));

app.get('/', function(req, res){
    return res.status(404).send("404 not found");
})

app.use('/', calcRouter);
app.use('/quote', calcRouter);

var server = app.listen(3000, '0.0.0.0', function(){
    var host = server.address().address 
    var port = server.address().port
    console.log("app started at http://%s:%s in %s mode", host, port, app.settings.env)
})
