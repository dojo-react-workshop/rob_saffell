const http = require('http');
let urlIn1 = process.argv[2];
let urlIn2 = process.argv[3];
let urlIn3 = process.argv[4];

var url1Data = "";
var url2Data = "";
var url3Data = "";

counter = 0;

url1data = http.get(urlIn1, (response) => {

	response.setEncoding("utf8");

	response.on("data", function(data) {

		url1Data=data;
		counter += 1;

		if(counter === 3) {
			console.log(url1Data);
			console.log(url2Data);
			console.log(url3Data);
		} else {return data}

	});

});

http.get(urlIn2, (response) => {

	response.setEncoding("utf8");

	response.on("data", function(data) {

		url2Data=data;
		counter += 1;

		if(counter === 3) {
			console.log(url1Data);
			console.log(url2Data);
			console.log(url3Data);
		} else {return}

	});

});

http.get(urlIn3, (response) => {

	response.setEncoding("utf8");

	response.on("data", function(data) {

		url3Data=data;
		counter += 1;

		if(counter === 3) {
			console.log(url1Data);
			console.log(url2Data);
			console.log(url3Data);
		} else {return}

	});

});