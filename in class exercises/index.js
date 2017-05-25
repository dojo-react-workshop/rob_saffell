'use strict';

const a = [1,2];

Array.prototype.map = function(callback) {
	const newArray = [];

	//this.forEach(function(value, index, array){
	//	newArray.push(callback(value));

	//});
	for (let i = 0; i < this.length; i+=1) {

		newArray.push(callback(this[i]));

	}


	return newArray;
}

console.log(a.map);

Array.prototype.filter = function(callback) {

	//this.forEach(function(value, index, array){
	//	newArray.push(callback(value));

	//});

	for (let i = 0; i < this.length; i+=1) {
		if (callback(this[i])) {
			newArray.push(this[i]);
		};

	}

}

console.log(a.filter);