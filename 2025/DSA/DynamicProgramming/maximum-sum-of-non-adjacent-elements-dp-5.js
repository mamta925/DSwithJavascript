/**
 * https://takeuforward.org/data-structure/maximum-sum-of-non-adjacent-elements-dp-5/
 */

function maxSumOfNonAdjacentElements(nums, index = 0) {
    if (index >= nums.length) return 0;


    const pick = nums[index] + maxSumOfNonAdjacentElements(nums, index + 2);


    const notPick = maxSumOfNonAdjacentElements(nums, index + 1);

    return Math.max(pick, notPick);
}

function maxSumMemo(nums, index = 0, memo = {}) {
    if (index >= nums.length) return 0;
    if (memo[index] !== undefined) return memo[index];

    const pick = nums[index] + maxSumMemo(nums, index + 2, memo);
    const notPick = maxSumMemo(nums, index + 1, memo);

    memo[index] = Math.max(pick, notPick);
    return memo[index];
}

console.log(maxSumOfNonAdjacentElements([1,2,4]))


function maxSumTabulation(nums) {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    const dp = Array(n).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }

    return dp[n - 1];
}

function maxSumOptimized(nums) {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    let prev1 = nums[0];         // dp[i - 1]
    let prev2 = 0;               // dp[i - 2]

    for (let i = 1; i < n; i++) {
        const pick = nums[i] + prev2;
        const notPick = prev1;
        const current = Math.max(pick, notPick);

        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}
