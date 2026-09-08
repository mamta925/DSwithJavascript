// 322. Coin Change
// Solved
// Medium
// Topics
// conpanies icon
// Companies
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
function coinChange(coins: number[], amount: number): number {
    const arr = new Array(amount + 1).fill(amount + 1);
    arr[0] = 0;
    for (let j = 1; j <= amount; j++) {
        for (const c of coins) {
            if (j >= c) {
                arr[j] = Math.min(arr[j], arr[j - c] + 1);
            }
        }
    }
    return arr[amount] > amount ? -1 : arr[amount];
}

/**
 * amount + 1 is “impossible.” Sort is not needed.

Time: O(n × amount) where n = coins.length
Space: O(amount)
 */