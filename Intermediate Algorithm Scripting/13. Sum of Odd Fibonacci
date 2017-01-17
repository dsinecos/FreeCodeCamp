/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Remainder

    */

function sumFibs(num) {

	/*
	function readArray(initialArray, argFunction) {
		argFunction(this[1], this[0]);
	}

	var arrayFib = [1, 1];

	var testArray = readArray(arrayFib, function(val, index){
		if (index <= 20) {
			return val + index;
		} else {
			return;
		}
	});
	*/

	
	/*arrayFib.readArray(function(val, index){

		var newFib = val + arrayFib[index + 1];

		console.log("Val " + val);
		console.log("Index " + index);

		if (newFib <= num) {
			arrayFib.push(newFib);
			console.log(arrayFib);
		} else {
			return;
		}
	});
	*/

	var initialArray = [1, 1];

	var fibArray = [1, 1];

	while (fibArray[fibArray.length - 1] <= num) {

		fibArray.push(initialArray.reduce(function(acc, val){
			var temp = acc + val;

			if (temp <= num) {
				return temp;
			}
		}));

		initialArray[1] = fibArray[fibArray.length - 1];
		initialArray[0] = fibArray[fibArray.length - 2];
	};

	var finalArray = fibArray.filter(function(val) {
		return (val % 2) != 0;
	})

	//console.log(fibArray);
	//console.log("finalArray " + finalArray);
	finalArray.pop();

	return finalArray.reduce(function(acc, val){
      return acc + val;
    });


}

sumFibs(50);
