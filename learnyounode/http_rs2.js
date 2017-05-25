const http = require('http');
const 
let urlIn = process.argv[2];

http.get(urlIn, (response) => {

	response.setEncoding("utf8");

	response.on("data", function(data) {

		console.log(data);

	});

	response.pipe(concatStream(function(data) {

		console.log(data);

	}));


});