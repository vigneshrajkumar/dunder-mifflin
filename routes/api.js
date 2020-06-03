var express = require('express');
var router = express.Router();

router.get('/ping', function(req, res, next) {
  res.send({
    staus: "success",
    value: "pong"
  });
});

module.exports = router;
