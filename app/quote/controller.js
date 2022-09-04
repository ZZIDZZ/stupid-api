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
        try {
            let quoteCount = await Quote.count()
            var random = Math.floor(Math.random() * quoteCount);
            let result = await Quote.findOne().skip(random)
            const { text, author } = result
            console.log(result);
            console.log(mongoose.connection.readyState);
            return res.status(200).send(result);
        } catch (err) {
            res
            .status(500)
            .json({ message: err.message || 'server failure' });
        }
    }
}