var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const db = require("./../conf/db")
const uri = require("./../conf/uriBuilder")

var mongoose = require('mongoose');

var apiRouter = require('./routes/api');
var authRouter = require('./routes/auth');

var app = express();

app.use(express.static(__dirname +'./../dunder-miff-ui/build'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect(uri.getConnectionString(db), {useNewUrlParser: true, useUnifiedTopology: true})
.catch(error => handleError(error));

app.use('/auth', authRouter);
app.use('/api', apiRouter);


// catch 4xx and forward to error handler
app.use(function (req, res, next) {
  next(createError(400));
});

app.use(function (err, req, res, next) {
  res.status(err.status || 400);
  res.send({
    status: "error",
    message: err.message
  });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);