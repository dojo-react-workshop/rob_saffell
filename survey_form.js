var express = require('express');
var path = require('path');
var app = express();
var bp = require('body-parser');
var session = require('express-session');

app.use(bp.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./views"));
app.set('view_engine', 'ejs');

app.get('/', function(req,res) {

	res.render("index");

});

app.post('/result', function(req, res) {

	console.log("POST DATA", req.body);
	res.redirect('/results');

	req.session.name = req.body.name;
    console.log(req.session.name);
    //code to add user to db goes here!
    // redirect the user back to the root route. 
    res.redirect('/');

});

app.listen(8000, function() {

	console.log("Listening on 8000");
})