function capitalizeFirstLetter(str) {
	// METHOD 1
	// strArr = str.toLowerCase().split(' ');
	// for (let i = 0; i < strArr.length; i++) {
	// 	strArr[i] =
	// 		strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
	// }
	// return strArr.join(' ');

	// METHOD 2
	strArr = str.toLowerCase().split(' ');
	return strArr
		.map((word) => {
			return word[0].toUpperCase() + word.substr(1);
		})
		.join(' ');
}
console.log(
	capitalizeFirstLetter('i love god the father, the son and the holy spirit'),
);
