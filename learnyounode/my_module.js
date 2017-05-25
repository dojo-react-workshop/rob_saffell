const fs = require('fs');
const path = require('path');

module.exports = function myModule(dirname, extension, cb) {
	fs.readdir(dirname, (err, list) => {
		if (err) {
			return cb(err);
		}

	list = list.filter((filename) => {
		return path.extname(filename) === `.${extension}`
	});

	cb(null, list);

	
})}