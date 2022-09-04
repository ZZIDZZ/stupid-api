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


app.use('/', calcRouter);
app.use('/quote', quoteRouter);

app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
  
module.exports = app;

