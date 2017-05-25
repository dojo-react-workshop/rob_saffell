var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request, response){
	// magic stuff here
	console.log('I got hit');
	
	//response.write("<html><h1> Hi</h1></html>");
	//response.end();
	console.log(request.url);
	if (request.url == "/") {
		
			fs.readFile('index.html','utf8', function(err, data) {
				if (!err) {
	
					response.end(data);}
				else {
					console.log(err);
					response.writeHead(404);
					response.end("Not Found");
				}
			});
		
		} else if (request.url == "/Post?") {

			response.end("<html><script>window.location='http://localhost:8000/ninjas'</script></html>");
		} else if (request.url == "/dojos/Post?") {

			response.end("You submitted!");
		} else if (request.url == "/ninjas") {
				fs.readFile('ninjas.html','utf8', function(err, data) {
					if (!err) {
						response.write(data);
						response.end("<html><script>window.open('https://en.wikipedia.org/wiki/Ninja');</script></html>");
					
					} else {
					
					console.log(err);
					response.writeHead(404);
					response.end("Not Found");
					}
				});

		} else if (request.url == "/dojos/new") {
			fs.readFile('dojos.html','utf8', function(err, data) {
				if (!err) {
	
					response.end(data);}
				else {
					response.writeHead(404);
					response.end("Not Found");
				}
			});
		

		} else {
			response.end("Error");
		}

});

server.listen(8000);

