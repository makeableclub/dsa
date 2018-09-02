// Iterative function to get the number of ways of climbing N steps, with max leap of 2
// return: count
function climb(n) {
	var npp = 1;
	var np = 2;
	var ways = 0;

	for(var i=3; i<=n; i++) {
		ways = np + npp;
		npp = np;
		np = ways;
	}
	return ways;
}

let count = climb(5);
// let count = climb(100);
console.log( "total ways: " + count);
