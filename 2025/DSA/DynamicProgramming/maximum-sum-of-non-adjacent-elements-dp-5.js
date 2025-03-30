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