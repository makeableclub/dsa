// make changes using coins in certain denomitors


// amount: total changes
// setsize: how many types of coins
// coins:  the actual set of coins, such as 1, 2, 5.. cents
// usedcoins:  the count of each coins being used so far
// return: the number of ways to make the change
function coinChange(amount, setsize, coins, usedcoins)
{
    // base conditions
    if(amount == 0)  {
        // print out the coins used for this branch
        console.log(usedcoins);
        return 1;
    }
    if(amount < 0)  return 0;
    if(setsize == 0 && amount >= 0) return 0;

    // algorithms:
    // the branch that uses at least once with the coins[setsize-1] denominator
    let used1 = usedcoins.slice(0);
    used1[setsize-1] = used1[setsize-1] + 1;
    // the branch that does not use last coin (coins[setsize-1]) in the set.
    let used2 = usedcoins.slice(0);

    // make recursive calls
    let branch1 = coinChange(amount-coins[setsize-1], setsize, coins, used1);
    let branch2 = coinChange(amount, setsize-1, coins, used2);

    return branch1 + branch2;
}

// Test case
let coins = [1, 2, 5];
let used = [0, 0, 0];
let ways = coinChange(23, coins.length, coins, used);
console.log("total ways: " + ways);
