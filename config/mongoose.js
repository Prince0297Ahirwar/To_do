const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://prince-02:8058177968@cluster0.7c0ke.mongodb.net/todo?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error while connectiong to database:'));
db.once('open', function() {
  // we're connected!
  console.log("succcessful connection to database");

});
