function buckety (arr) {

var max = arr[0];
var water =0;

	for (var i =0; i<arr.length -1; i++) {
		if(arr[i] < arr[i+1]) {max = arr[i+1]}
			else {continue;};
	}

var newArr = [];

	for (i = 0; i<arr.length; i++) {
		for (var j = 0; j < max; j++) {
			if(arr[i] < j) {newArr[i][j] = 0}
			else {newArr[i][j]=1}; 
		};

	};
	
	for (i = 0; i<newArr.length; i++) {
		for (j = 0; j<max; j++) {
			if (newArr[i][j] === 0 && flag === 0) {flag =1;}
			else if {}			
		}
	} 

}