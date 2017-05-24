const firstPromise = first();

firstPromise 
	.then(function(secretval) {
		return second(secondVal)
	})
	.then(console.log);