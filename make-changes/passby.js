// explain program parameter pass by value vs pass by reference

function valueReference(num, str, arr)
{
    // console.log("===== inside of function : START =====");
    // console.log("num = " + num);
    // console.log("str = " + str);
    // console.log("arr = " + arr);

    // make some changes inside function
    num = num + 5;
    str = str + " added some";
    arr.push("more elements");

    // console.log("num = " + num);
    // console.log("str = " + str);
    // console.log("arr = " + arr);
    //
    // console.log("===== inside of function : END =====");
}

let num = 2;
let str = "hi";
let arr = ["ele1", "ele2"];

console.log("num = " + num);
console.log("str = " + str);
console.log("arr = " + arr);

valueReference(num, str, arr);
console.log("After function call=======");

console.log("num = " + num);
console.log("str = " + str);
console.log("arr = " + arr);
