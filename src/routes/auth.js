var express = require('express');
var router = express.Router();
var { v4: uuidv4 } = require('uuid');
var User = require('./../models/user')

/* POST /login authenticates the user */
router.post('/login', (req, res, next) => {
    const userObj = new User({
        email: req.body.email,
        password: req.body.password,
        isSeller: req.body.isSeller
    })
    // TODO::vig Salt the password and hash it.
    User.findOne({ 'email': userObj.email }, (err, usr) => {
        if (err) {
            return err;
        }
        if (usr === null || usr.password !== userObj.password) {
            return res.status(200).send({ status: "failure", message: 'invalid credentials' });
        }
        const sessionKey = uuidv4()
        User.update({ 'email': userObj.email }, { 'sessionKey': sessionKey }, (err, usr) => {
            if (err) {
                return err;
            }
            res.cookie('dm-auth', sessionKey, { expire: 360000 + Date.now() })
            return res.json({ status: "success", sessionKey: sessionKey });
        })
    })
});


/* get /user returns the current signed user info */
router.get('/user', async function (req, res, next) {
    User.findOne({ 'sessionKey': req.cookies['dm-auth'] }, { 'password': false, 'sessionKey': false }, function (err, doc) {
        if (err) { next(err) }

        if (!doc) {
            return res.status(401).json({ status: "failure", message: "Invalid Credentials" });
        }
        return res.status(200).json({ message: doc });
    })
});


/* GET /logout clears the session */
router.get('/logout', function (req, res) {
    User.updateOne({ 'sessionKey': req.body.sessionKey }, { 'sessionKey': null }, function (err, usr) {
        if (err) {
            return err;
        }
        res.cookie('dm-auth', "", { expire: Date.now() });
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
        userObj.save(err => {
            if (err) {
                return err;
            };
            return res.status(200).send({ status: "success", message: 'User created' })
        })
    })
});

module.exports = router;



