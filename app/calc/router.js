var express = require('express');
var router = express.Router();
const {
    calc
  } = require('./controller');

router.get('/calc', calc);
module.exports = router;