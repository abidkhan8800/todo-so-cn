const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo_app');

// configuring the database connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to db'));
db.once('open', function(){
    console.log('Successfully connected to the database');
});