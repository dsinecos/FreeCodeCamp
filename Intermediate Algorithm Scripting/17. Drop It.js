function dropElements(arr, func) {

	var result = Array.from(arr);

	for(var i in result) {

		// console.log("1 " + func(arr[i]));
		// console.log("2 " + func(arr[i]) === false);
		// console.log("3 " + !func(arr[i]));

		console.log("For check " + result[i]);
		console.log("Result " + !func(result[i]));		

		if (!func(result[i])) {
			console.log("Removed " + arr.shift());
			console.log("Result status " + result);
			console.log("Array status " + arr);
		} else {
			return arr;
		}
	}

	return arr;
}

//console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
//console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
