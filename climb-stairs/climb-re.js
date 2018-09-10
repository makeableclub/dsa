// function to get the number of ways of climbing N steps, with max leap of 2
// return: count

// as cache to save the "ways"  for each N
var answers = [];
answers[0] = 1;
answers[1] = 1;
answers[2] = 2;

function climb(n) {
	// base/boundary condition
	// if( n <= 2 ) return n;
	if( n==1 ) {
		return 1;
	}
	if( n==2 ) {
		return 2;
	}
	// look up for a value
	if( answers[n] !== undefined && answers[n] > 1 ) {
		console.log("cache hit");
		return answers[n];
	}

	// console.log("before" + n);
	// recursive call to find answer for "n"
	var sum = climb(n-1) + climb(n-2);

	// save the "sum" to an array for future use;
	answers[n] = sum;
	console.log("save to cache: " + n + ":" + sum);
	return sum;
}


let count = climb(14);
// let count = climb(354);
console.log( "total ways: " + count);
