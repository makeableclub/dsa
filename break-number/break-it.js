//
// algorithm:
// mp(n)  =>  max( i * (n-i), i * mp(n-i) )
// -----                          -------
//
function maxProduct(number)
{
    // exit condition,
    // stop if reaching number 4 and below
    if( number <= 4) {
        return number;
    }

    // optimization
    if( cache[number] > 0 ) {
        return cache[number];
    }

    var pn = 1;     // current level
    var pm = 1;     // max from all subtree
    var largest = 0;    // global largest
    var larger = 0;     // surface the current level max

    // compare node vs
    for(var i=1; i<number; i++)
    {
        pn = i * (number-i);
        pm = i * maxProduct(number-i);

        // local max for current level
        if( larger < pn ) {
            larger = pn;
        }
        // local max for current and all sub-level
        if( larger < pm ) {
            larger = pm;
        }
        // the global max
        if( largest < larger) {
            largest = larger;
        }
    }
    // save it for optimization
    cache[number] = largest;
    return largest;
}


var length = 1000;
// create the array to hold cache data for optimization
var cache = Array(length+1).fill(0);

let result = maxProduct(length);
console.log(result);
