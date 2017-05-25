var http = require('http');
var fs = require('fs');
var port = process.argv[2]

var server = http.createServer(function(request, response){
	// magic stuff here
	console.log('I got hit');
	
	//response.write("<html><h1> Hi</h1></html>");
	//response.end();
	console.log(request.url);
	if (request.url == "/") {
		
		fs.readFile('server.html','utf8', function(err, data) {
			if (!err) {
				response.write(data); 
				response.end(data);}
			else {
				response.writeHead(404);
				response.end("Not Found");
			}
		});
		
		} else if (request.url == "/Post?") {

			response.end("You submitted!")
		} else if (request.url == "ninjas") {

		
		response.write("Hi");
		response.end();
		};

});

server.listen(8000);

