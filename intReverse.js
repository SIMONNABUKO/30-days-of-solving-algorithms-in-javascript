function reverseInt(int) {
	reversedInt = int
		.toString()
		.split('')
		.reverse()
		.join('');
	return parseInt(reversedInt) * Math.sign(int);
}

console.log(reverseInt(-12345));
