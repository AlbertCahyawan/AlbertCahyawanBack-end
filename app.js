var express = require('express');
var app = express();
var path = require('path');
const router = express.Router();
 
var blogdata  = require('./blog');  

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// const jwt = require ('./test/JWT.js')
// app.use(jwt)

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/home', (req,res) => {
    res.send('Hello World, This is home router');
});

app.get('/blog', (req,res) => { 
    res.json(blogdata);
});
  
app.get('/profile', (req,res) => {
const testObj ={
    id:1,
    name:'albert',
}
res.json(testObj);
}); 

app.listen(process.env.PORT || 4000, function () { 
    console.log('Node app is working now!');
});