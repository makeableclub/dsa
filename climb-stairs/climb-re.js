// function to get the number of ways of climbing N steps, with max leap of 2
// return: count

var answers = [];
answers[0] = 1;
answers[1] = 1;
answers[2] = 2;

function climb(n) {
	// boundary condition
	// hh	if( n <= 2 ) return n;
	if( n==1 ) {
		console.log(n);
		return 1;
	}
	if( n==2 ) {
		console.log(n);
		return 2;
	}
	// look up for a value
	if( answers[n] !== undefined && answers[n] > 1 )
		return answers[n];

	// console.log("before" + n);

	var sum = climb(n-1) + climb(n-2);

	console.log("after" + n);

	// save the "sum" to an array for future use;
	answers[n] = sum;



	return sum;
}


let count = climb(5);
// let count = climb(354);
console.log( "total ways: " + count);
