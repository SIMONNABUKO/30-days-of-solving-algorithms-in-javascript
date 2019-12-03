function isPalindrome(str) {
	let reversedString = str
		.split('')
		.reverse()
		.join('');
	if (reversedString.toLowerCase() === str.toLowerCase()) {
		return true;
	}
	return false;
}
console.log(isPalindrome('Racecar'));
console.log(isPalindrome('Simon'));
