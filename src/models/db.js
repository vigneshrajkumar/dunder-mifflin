var mongoose = require("mongoose")

mongoose.connection.once('open', _ => {
    console.log('Database connected')
  })

mongoose.connection.on('error', err => {
    console.log(err);
});