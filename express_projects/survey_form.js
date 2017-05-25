'use strict';

var express = require('express');
var path = require('path');
var app = express();
var bp = require('body-parser');


app.use(bp.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));


app.get('/', function(req,res) {

	res.render("index");

});

app.post('/result', function(req, res) {

	console.log("POST DATA", req.body);
	res.render('results', {name: req.body.user_name, location: req.body.location, lang: req.body.lang});

    //code to add user to db goes here!
    // redirect the user back to the root route. 
 

});

app.listen(8000, function() {

	console.log("Listening on 8000");
});