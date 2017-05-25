const dirname = process.argv[2];
const extFilter = process.argv[3];

const filterFilesbyExt = require('./my_module');

filterFilesbyExt(dirname, extFilter, (err, fileArray) => {
	if (err) {
		return console.log('There was an error on read', err);
	} 
	
		fileArray.forEach((filename) => {
			console.log(filename);
		});
	

});