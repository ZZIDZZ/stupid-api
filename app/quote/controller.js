var express = require('express')
const bodyParser = require("body-parser");
var math = require('mathjs');
const fs = require('fs');
var logger = require('morgan');
const Quote = require('./model');
const mongoose = require('mongoose');
const config = require('../../config');

module.exports = {
    quote: async (req, res) => {
        let result = Quote.findOne();
        console.log(result);
        return res.status(200).send(`${result}`);
    }
}