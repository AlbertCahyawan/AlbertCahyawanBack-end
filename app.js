require('dotenv').config();
var express = require('express');
var app = express();
var path = require('path');   

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const data = require ('./data/index.js')
app.use(data) 

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/home', (req,res) => {
    res.send('Hello World, This is home router');
}); 
   

app.listen(process.env.PORT || 4000, function () { 
    console.log('Node app is working now!');
});