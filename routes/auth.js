var express = require('express');
var router = express.Router();

/* POST /login authenticates the user */
router.post('/login', function (req, res, next) {
    res.send({
        staus: "success"
    });
});

/* GET /logout clears the session */
router.get('/logout', function (req, res, next) {
    res.send({
        staus: "success"
    });
});

/* POST /register regsiters a new user */
router.post('/register', function (req, res, next) {
    res.send({
        staus: "success"
    });
});

module.exports = router;
