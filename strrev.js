'use strict';
function strRev(str) {
	// return str
	// 	.split('')
	// 	.reverse()
	// 	.join('');
	let reversedStr = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reversedStr = reversedStr + str[i];
	}
	return reversedStr;
}
console.log(strRev('My name is Simon Nabuko Angatia'));
//using for() loops
