const somePromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		const rand = Math.random();
		if (rand >  0.5) {
			reject();
		} else {
			resolve();

		}
		}, 2000);
	});
somePromise
	.then(function(){console.log("resolved")})
	.catch(function(){console.log("rejected")})