var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');

var apiRouter = require('./routes/api');
var authRouter = require('./routes/auth');

var app = express();

app.use(express.static('client'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/dunder-mifflin',
 {useNewUrlParser: true, useUnifiedTopology: true})
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
    message: "Malfromed URI"
  });
});


app.listen(8000, function () {
  console.log('listening on port 8000.');
});
