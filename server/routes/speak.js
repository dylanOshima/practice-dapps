var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hello World! I'm a smart contract baby!");
});

module.exports = router;
