const mongoose = require('mongoose');

// Double Check: Is DB name ok?
mongoose.connect('mongodb://127.0.0.1:27017/usersDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose.connection;