let fs = require('fs');
let dirName = process.argv[2];
let extensiony = process.argv[3];
let dirArray = [];
let filey = "";
let countery = 0;
let arrFiley = [];

function Filtery (val, index, arr) {
	arrFiley = val.split(extensiony);
	if (arrFiley.length == 2) {
		return true;
	} else {
	return false;
	}
}


if (dirName==undefined || extensiony == undefined) {
	return;
} else {
	fs.readdir(dirName, function(err, data) {
	if (!err) {
		dirArray = data.filter(Filtery);
		for (let i = 0; i<dirArray.length-1; i++) {
			console.log(dirArray[i]);
		}
	} else {
		console.log("Read error");
	}
});

}
