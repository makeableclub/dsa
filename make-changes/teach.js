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
        console.log(usedcoins);
        return 1;
    }
    if(amount < 0)  return 0;
    if(setsize == 0 && amount >= 0) return 0;

    // algorithms:
    // make recursive calls
    // removed one coin
    let branch2 = coinChange(amount, setsize-1, coins, usedcoins);

    // at least one last coin
    usedcoins[setsize-1] = usedcoins[setsize-1] + 1;
    let branch1 = coinChange(amount-coins[setsize-1], setsize, coins, usedcoins);

    return branch1 + branch2;
}

// Test case
let coins = [1, 2, 5];
let used = [0, 0, 0];
let ways = coinChange(13, coins.length, coins, used);
console.log("total ways: " + ways);
