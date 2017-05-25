let fs = require('fs');
let fileName = process.argv[2];
let docArray = [];
let countery = 0;


if (fileName==undefined) {
	return;
} else {
	fs.readFile(fileName, 'utf8', function(err, data) {
	if (!err) {
		docArray = data.split("");

		for (i=0; i<docArray.length; i++)
			{
				if(docArray[i]=="\n") {
					countery += 1;
				} else {
					continue;
				}
			}
		console.log(countery);
	} else {
		console.log("Read error");
	}
});

}
