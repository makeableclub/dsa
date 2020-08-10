// reverse entire thing
function myReverse(input) {
    var inArray = input.split("");
    var outArray = [];
    for(var i=0; i<inArray.length; i++) {
        outArray.unshift(inArray[i]);
    }
    return outArray.join("");
}
// test myReverse
console.log( myReverse("does it really reserve"));


// reverse entire thing using built-in "reverse()" function
function reverseAll(input)
{
    var strArray = input.split("");
    strArray.reverse();
    return strArray.join("");
}

function reverseWord(input)
{
    var strArray = input.split(" ");
    strArray.reverse();
    return strArray.join(" ");
}

function reverseChar(input)
{
    var wordArray = input.split(" ");
    var newArray = wordArray.map(word => reverseAll(word));
    return newArray.join(" ");
}



// Test reversing functions
var sentence = "how are you today?";

console.log(reverseAll(sentence));
console.log(reverseWord(sentence));
console.log(reverseChar(sentence));


