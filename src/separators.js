function thousands_separators(num)  {
	var numString = num.toString();
	var outputString = '';

	if( numString.indexOf('.') === -1) {
		outputString = separateNumber(numString);
	}
	else {
		outputString = separateDecimalNumber(numString);
	}

	return outputString ;
}

function separateNumber(numString) {
	var resultString = '';

	while(numString.length > 3) {
		resultString += ',' + numString.slice(-3);
		numString = numString.slice(0, numString.length - 3);
	}

	if(numString.length != 0){
		resultString = numString + resultString;
	}

	return resultString;
}

function separateDecimalNumber(numString) {
	var resultString = '';
	var myNumString = numString.split('.');

	while(myNumString[0].length > 3) {
		resultString += ',' + myNumString[0].slice(-3);
		myNumString[0] = myNumString[0].slice(0, myNumString[0].length - 3);
	}

	if(myNumString[0].length != 0){
		resultString = myNumString[0] + resultString + '.' + myNumString[1];
	}

	return resultString;
}

module.exports = thousands_separators;