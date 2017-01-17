/* 
// Checking if the type of arguments matches the expect type of
	
	if (!this instanceof Array) {
		throw new TypeError(' Fuck Off with your non-array ');
	}

	if (typeof transformFunc != 'function') {
		throw new TypeError(transformFunc + " is not a function");
	}

	if (typeof stopFunc != 'function') {
		throw new TypeError(stopFunc + " is not a function");
	}
	*/



/*
- Read and transform the same array

1. Read an array as it is being updated - Transform the array as read
2. Stop reading the array when a specified condition is satisfied

*/

/*
if (!Array.prototype.readArray) {
	
	Array.prototype.readArray = function(transformFunc, stopFunc) {	

	// Assigning the object that called readArray and calculating its length
	var thisObject = Object(this);

	var iterant = 1;

	while (iterant < thisObject.length) {

		var thisObjectValue, transformedValue;

		var stopValue = stopFunc.call(iterant, thisObject);

		if (iterant in thisObject & stopValue) {

			thisObjectValue = thisObject[iterant];

			transformedValue = transformFunc.call(iterant, thisObject);

			thisObject.push(transformedValue);
		}

		iterant++;
	}

	return thisObject;
	
}

}

function sumFibs(num) {

	function nextFib(b, c) {

		return c[b] + c[b-1];
	}

	function stopAt(b, c) {
		//var test = c[b] + c[b-1];

		if (b <= num) {
			return true;
		} else {
			return false;
		}
	}


	var demo = [1, 1];

	var test = demo.readArray(nextFib, stopAt);

	var result = test.filter(function(val){ return val%2 !== 0}).reduce(function(val1, val2){ return val1 + val2});

	console.log(test);	

	return result;
}

console.log(sumFibs(10));

*/

if (!Array.prototype.sequence) {
	
	Array.prototype.sequence = function(transformFunc) {	

	var thisObject = Object(this);

	if (thisObject.length === 1) {

		var iterant = 0;

		while (iterant < thisObject.length) {

			var transformedValue;

			transformedValue = transformFunc(iterant, thisObject);

			var transformedValue1 = transformedValue[0];
			var transformedValue2 = transformedValue[1];

			if (iterant in thisObject & transformedValue2) {					

				thisObject.push(transformedValue1);

			} else {

				return thisObject;
			}

			iterant++;
		}
	} else if (thisObject.length === 2) {

		var iterant = 1;

		while (iterant < thisObject.length) {

			var transformedValue;

			transformedValue = transformFunc(iterant, thisObject);

			var transformedValue1 = transformedValue[0];
			var transformedValue2 = transformedValue[1];

			if (iterant in thisObject & transformedValue2) {					

				thisObject.push(transformedValue1);

			} else {

				return thisObject;
			}

			iterant++;
		}
	}

	
}

}

/*
var demo = [1]

num = 30;

function multiply(index, array) {

	if (array[index] * 5 < 50) {
		return [array[index] * 5, true];
	} else {
		return [0, false];
	}
}

var test = demo.sequence(multiply);

console.log(test);

*/

//Use the sequencec function to create an array of Fibonacci numbers
function sumFibs(num) {
	var demo = [1, 1]

	function createFib(index, array) {

		var test = array[index] + array[index -1];

		if (test <= num) {
			return [test, true]
		} else {
			return [0, false]
		}
	}

	var fibArray = demo.sequence(createFib).filter(function(val){return val%2 !== 0}).reduce(function(val1, val2){return val1 + val2});

	console.log(fibArray);

	return fibArray;
}

sumFibs(75025);
