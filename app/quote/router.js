var express = require('express');
var router = express.Router();
const {
    quote
  } = require('./controller');

router.get('/', quote);
module.exports = router;