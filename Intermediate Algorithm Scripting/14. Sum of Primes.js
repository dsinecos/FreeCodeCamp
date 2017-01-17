function sumPrimes(num) {

	function isPrime(element) {
		for (var i = 2; i < element; i++) {
			if (element%i === 0) {
				return false;
			}
		}

		return true;
	}

	sum = 2;

	for (var i = 3; i <= num; i++) {

		if (isPrime(i)) {
			sum += i;
		}
	}

	return sum;
}

console.log(sumPrimes(10));
