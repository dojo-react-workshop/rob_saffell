var fs = require("fs");

var content = "";

function fileUp() {
	fs.readFile('node.txt','utf8', function (err, data) {
			var i = setTimeout(console.log(data.toUpperCase()),4000);
		if (err) reject (err);

	})
}

function fileDown() {
	fs.readFile('node.txt','utf8', function (err, data) {
		if (err) reject (err);
			console.log(data.toLowerCase());
	});
}

fileUp();
fileDown();
