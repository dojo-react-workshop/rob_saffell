let args = process.argv;
let total = 0;

if (args.length<4) {
	console.log("Add more arguments");
	return
	} else {
		for (let i = 2; i<args.length; i++) {
			total += Number(args[i]);
		};
		console.log(total);
	}
