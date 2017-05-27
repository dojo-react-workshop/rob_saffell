module.exports = function (app) {

var fs = require('fs');
var path = require('path');
var bp = require('body-parser');
var fs = require('fs');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.set('images', path.join(__dirname, './views'));


var arr1 = [];
var arr2 = [];
const sendNames = {};
var htmlString = "";

	app.get('/', function(req,res) {

	fs.readFile(__dirname+'/namelist.txt','utf8', function (err, data) {

			
			arr1 = data.split(";");
			;

			for (var i = 0; i < arr1.length-1; i++) {
				arr2[i] = arr1[i].split(",");
				
			};

			for (var i =0; i < arr2.length; i++) {

				var nameStr = "'" + arr2[i][0] + " " + arr2[i][1] + "'";
				var jobStr = "'" + arr2[i][2] + "'";
				var compStr = "'" + arr2[i][3] + "'";



				htmlString += '<div id="' + i + '">';
				htmlString += '<label id="' + i + '-0" onclick="changey(' + nameStr +', ' + jobStr +', ' + compStr + ', ' + i + ')">Name: ' + arr2[i][0] + " " + arr2[i][1] + '</input></label><br>';
				htmlString += '<label id="' + i + '-2" onclick="changey(' + nameStr +', ' + jobStr +', ' + compStr + ', ' + i + ')">Job: ' + arr2[i][2] +'</input></label><br>';
				htmlString += '<label id="' + i+ '-3" onclick="changey(' + nameStr +', ' + jobStr +', ' + compStr + ', ' + i + ')">Company: ' + arr2[i][3] +'</input></label><br>';
				htmlString += '</div>';				
			}
		//res.send(htmlString);
		sendNames.htmlString = htmlString;
		sendNames.arr2 = arr2;
		res.render("namelist", sendNames);

	});


	});

	app.post('/result', function(req, res) {

		console.log("POST DATA", req.body);
		res.render('results', {name: req.body.user_name, location: req.body.location, lang: req.body.lang});
	 

	});

}