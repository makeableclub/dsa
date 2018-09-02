// function to get the number of ways of climbing N steps, with max leap of 2
// return: the array of actual unique steps

var answers = [];
answers[0] = 1;
answers[1] = 1;
answers[2] = 2;

function climb(n) {
	// boundary condition
	if( n==1 ) return [1];
	if( n==2 ) return ["1 2", "- 2"];

	var ways = [];

	var prev = climb(n-1);
	for(var i=0; i<prev.length; i++) {
		ways.push(prev[i] + " " + n);
	}

	var pprev = climb(n-2);
	for(var i=0; i<pprev.length; i++) {
		ways.push(pprev[i] + " - " + n);
	}

	return ways;
}


let approaches = climb(14);
for(var i=0; i<approaches.length; i++) {
	console.log(approaches[i]);
}
console.log(approaches.length);
