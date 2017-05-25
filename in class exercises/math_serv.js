fs = require("fs");

var exports = module.exports = {};

exports.subtracTor = function (num1, num2=0) {
	return (num1 - num2);
}

exports.addiTor = function (num1, num2=0, num3=0, num4=0) {
	return (num1 + num2 + num3 + num4);
}

exports.multiTor = function (num1, num2=1, num3=1, num4=1) {
	return (num1 * num2 * num3 * num4);
}

exports.cardReset = function (arr = []) {
	let id = 0;
	let suit = ["Hearts", "Spades", "Clubs", "Diamonds"];
	let card = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

	let card_deck = [];

	function suit_setter() {
		for (let i = 0; i<13; i++) {

			arr[i]=[{id: i+1, suit: suit[0], card: card[i]}];
		};

		for (let i = 13; i<27; i++) {

			arr[i]=[{id: i+1, suit: suit[1], card: card[i-13]}];
		};

		for (let i = 26; i<40; i++) {

			arr[i]=[{id: i+1, suit: suit[2], card: card[i-26]}];
		};

		for (let i = 39; i<52; i++) {

			arr[i]=[{id: i+1, suit: suit[3], card: card[i-39]}];
		};

		return arr;
	}

	card_deck = suit_setter();

	let cardSwapper = [];
	let g = 0;


	for(let i =0; i<52; ) {

		function getRandomIntInclusive(min = 1, max = 52) {
  			min = Math.ceil(min);
  			max = Math.floor(max);
  			g = Math.floor(Math.random() * (max - min + 1)) + min;
		}

		if(cardSwapper[g] == undefined) {console.log(g+"\n"+card_deck[g]);}

	}

	console.log(cardSwapper);
}

