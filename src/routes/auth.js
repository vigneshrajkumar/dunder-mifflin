var express = require('express');
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
            res.cookie('dm-auth', sessionKey, { expire: 360000 + Date.now() })
            return res.json({ status: "success", sessionKey: sessionKey });
        })
        // its not write to keep a return stmt here; you'd be rewriting headers; callbacks on completion, unwinds the stack
    })
});


/* get /user returns the current signed user info */
router.get('/user', async function (req, res) {
    let err, usr = await User.findOne({ 'sessionKey': req.cookies['dm-auth'] }, { 'email': true })
    if (err) res.status(500).send({ status: "failure", message: err.message });
    return res.status(200).send({ status: "success", message: usr });
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
    })
    userObj.save(function (err) {
        if (err) {
            return err;
        };
        return res.status(200).send({ status: "success", message: 'User created' })
    })
});

module.exports = router;



