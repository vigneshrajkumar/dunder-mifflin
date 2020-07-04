var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const db = require("./../conf/db")
const uri = require("./../conf/uriBuilder")

var mongoose = require('mongoose');

var apiRouter = require('./routes/api');
var authRouter = require('./routes/auth');



// Envionment setup and checks
let port = process.env.PORT || 8000;
let mdbConnection = process.env.MDB_CXN || uri.getConnectionString(db);
console.log("------------------------")
console.log("Application Environment:")
console.log("Port:", port)
console.log("Mongo:", mdbConnection)
console.log("------------------------")

var app = express();
app.use(express.static(__dirname +'./../dunder-miff-ui/build'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect(mdbConnection, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, (err) => {
  if (err) {console.error("Mongo connection failed. Err:", err.message); process.exit(1)}
  console.log("mongo connection success")
})


app.use('/auth', authRouter);
app.use('/api', apiRouter);

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    status: "internal system error",
    message: err.message
  });
});

app.listen(port, console.log(`dunder-mifflin backend server listening @ ${port}`));
