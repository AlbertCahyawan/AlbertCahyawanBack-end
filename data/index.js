var express = require('express'); 
const route = express.Router();

var data  = require('./data');  

route.get('/data/portofolio', (req,res) =>{
    res.json(data.portofolioData ); 
})
// remove this once blog api changed
route.get('/blog', (req,res) => { 
    res.json(data.blogData);
});

route.get('/data/blog', (req,res) => { 
    res.json(data.blogData);
});

module.exports = route