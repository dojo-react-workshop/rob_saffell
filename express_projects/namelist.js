'use strict';

var express = require('express');
var path = require('path');
var app = express();
var bp = require('body-parser');
var fs = require('fs');

app.use(bp.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));


require('./routes.js')(app);

app.listen(8000, function() {

	console.log("Listening on 8000");
});