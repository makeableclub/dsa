// break the number by 3
// stop when reaching to 4
function breakNumber(number)
{
    var product = 1;
    var detail = "";
    while( number > 4 ) {
        number = number -3;
        product = product * 3;
        detail = detail +  " 3 * ";
    }
    product = product * number;

    detail = detail + number;
    console.log(detail);

    return product;
}

let result = breakNumber(10);
console.log(result);
