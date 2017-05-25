let fs = require('fs');
let fileName = process.argv[2];
let doc = "";
let docArray = [];
let countery = 0;


if (fileName==undefined) {
	return;
} else {
	doc = fs.readFileSync(fileName, "utf8");
	
	docArray = doc.split("");

		for (i=0; i<docArray.length; i++)
			{
				if(docArray[i]=="\n") {
					countery += 1;
				} else {
					continue;
				}
			}
		console.log(countery);

};
