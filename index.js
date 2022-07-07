const express = require("express");

const app = express();

app.set('view engine', 'ejs');
app.set("views", "./ejs");

app.get('/', function(req, res) {
    res.render('home',{
        title:"Hello"
    });
});

app.listen(5000)