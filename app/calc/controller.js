var express = require('express')
const bodyParser = require("body-parser");
var math = require('mathjs')
const fs = require('fs')
var logger = require('morgan');

module.exports = {
    calc: async (req, res) => {
        try {
        let exp = req.query.exp;
        console.log(req.query)
        console.log(JSON.stringify(req.headers))
        console.log(req.ip)
        fs.appendFile('log.txt', JSON.stringify(req.headers), function (err) {
            if (err) throw err;
            console.log('Success!');
        });
        try{
            let result = math.evaluate(exp)
            console.log(result)
            return res.status(200).send(`${result}`);
        }
        catch(e){
            console.log(e)
            fs.appendFile('error.log', `${e.toString()} ${req.ip}`, function (err) {
                if (err) throw err;
                console.log('Error Logged!');
            });
            return res.status(500).send("error");
        }} catch (err) {
            res
            .status(500)
            .json({ message: err.message || 'server failure' });
        }
    }
}