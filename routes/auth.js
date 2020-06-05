var express = require('express');
var passport = require('passport')
var router = express.Router();
var { v4: uuidv4 } = require('uuid');
var User = require('./../models/user')

/* POST /login authenticates the user */
router.post('/login', function (req, res, next) {
    const userObj = new User({
        id: uuidv4(),
        email: req.body.email,
        password: req.body.password,
        isSeller: req.body.isSeller
    })
    // TODO::vig Salt the password and hash it.
    User.findOne({ 'email': userObj.email }, function (err, usr) {
        if (err) {
            return err;
        }
        if (usr === null || usr.password !== userObj.password) {
            return res.status(200).send({ status: "failure", message: 'invalid credentials' });
        }
        const sessionKey = uuidv4()
        User.update({ 'email': userObj.email }, { 'sessionKey': sessionKey }, function (err, usr) {
            if (err) {
                return err;
            }
            return res.json({ status: "success", sessionKey: sessionKey });
        })
        // its not write to keep a return stmt here; you'd be rewriting headers; callbacks on completion, unwinds the stack
    })
});

/* GET /logout clears the session */
router.get('/logout', function (req, res, next) {
    User.update({ 'sessionKey': req.body.sessionKey }, { 'sessionKey': null }, function (err, usr) {
        if (err) {
            return err;
        }
        return res.json({ status: "success" });
    })
});

/* POST /register regsiters a new user */
router.post('/register', function (req, res, next) {
    const userObj = new User({
        id: uuidv4(),
        email: req.body.email,
        password: req.body.password,
        isSeller: req.body.isSeller
    })
    User.findOne({ 'email': userObj.email }, function (err, usr) {
        if (err) {
            return res.status(500).send(err);
        }
        if (usr != null) {
            return res.status(422).send({ status: "failed", message: 'User already exist' });
        }
    })
    userObj.save(function (err) {
        if (err) {
            return err;
        };
        return res.status(200).send({ status: "success", message: 'User created' })
    })
});

module.exports = router;



