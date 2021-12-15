const express = require('express');

// configuring db
const db = require('./config/mongoose')
const app = express();
const port = 4200

// setting up the view engine and views location
app.set('view engine', 'ejs');
app.set('views', './views')

//parsing the req and setting up the static folder location
app.use(express.urlencoded({extended: true}));
app.use(express.static("assets"))

//adding routing
app.use('/', require('./routes'));


//starting the server
app.listen(port, function(err){
    if(err){
        console.log(`Error in starting the server: ${err.message}`);
        return;
    } 
    console.log(`Server is listening on ${port}`);
})