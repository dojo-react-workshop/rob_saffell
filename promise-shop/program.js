'use strict'

require('es6-promise');

const promise = new Promise((resolve, reject) => {
	
	resolve('FULFILLED!');

});

promise.then(value => {
	setTimeout(talky(value),300);
});

function talky(value) {
	console.log(value);
};