const array = [1,2,3,4];
const array2 = ['i','am','not','smrt'];

var str = "";

Array.prototype.reduce = function (cb, currVal) {

	let i = 0;

	if (currVal === undefined){
		currVal = this[0];
		i = 1;

	}

	currVal = currVal || this[0];

	for (i; i < this.length; i+= 1) {
		currVal=cb(currVal, this[i]);
	}

	return currVal;

}

const sum = array.reduce((currentSum,currentVal) => {
	currentSum += currentVal;
	return currentSum;
}, 100);

const gum = array2.reduce((str,currStr) => {
	str += currStr;
	return str;
}, "hi");

console.log(str);