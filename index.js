const express = require('express');

const db = require('./config/mongoose')
const app = express();
const port = 4200

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(express.urlencoded({extended: true}));
app.use('/', require('./routes'));



app.listen(port, function(err){
    if(err){
        console.log(`Error in starting the server: ${err.message}`);
        return;
    } 
    console.log(`Server is listening on ${port}`);
})