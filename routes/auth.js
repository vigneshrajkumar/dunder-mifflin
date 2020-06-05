var express = require('express');
var passport = require('passport')
var router = express.Router();
var { v4: uuidv4 } = require('uuid');
var User = require('./../models/user')

/* POST /login authenticates the user */
router.post('/login', function (req, res, next) {
    res.send({
        staus: "success"
    });
});

/* GET /logout clears the session */
router.get('/logout',
    passport.authenticate('local'),
    function (req, res, next) {
        res.send({
            staus: "success"
        });
    });

/* POST /register regsiters a new user */
router.post('/register', function (req, res, next) {

    const userObj = new User({
        id: uuidv4(),
        email: req.body.email,
        password: req.body.password,
        isSeller: req.body.isSeller
    })

    // TODO:vig user exisitance validation
    
    userObj.save(function (err, user) {
        if (err) next("Insert error") ;
      }).catch(err => console.log(err)); 

    res.send({
        staus: "success"
    });


});

module.exports = router;



