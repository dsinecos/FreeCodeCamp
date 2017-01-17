function uniteUnique(arr) {

	var args = Array.from(arguments)

	var flatArr = args.reduce(function(val1, val2){return val1.concat(val2)});

	// console.log(flatArr);

	var result = flatArr.filter(function(val, index){return flatArr.indexOf(val) === index});

	return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
