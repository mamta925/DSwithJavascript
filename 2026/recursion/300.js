// 300. Longest Increasing Subsequence
// Given an integer array nums, return the length of the longest strictly
// increasing subsequence.
//
// Example: nums = [10, 9, 2, 5, 3, 7, 101, 18] -> 4  (2, 3, 7, 101)
//
// Idea: dp[i] = longest increasing subsequence that STARTS at index i.
// Every single number is a subsequence of length 1, so start with 1s.
// Walk from the right so later answers are already known. For each i, look
// at every later index j. If nums[j] is bigger, you can put nums[i] in
// front of that chain: 1 + dp[j]. Keep the best of those options.

function lengthOfLIS(nums) {
    const n = nums.length;
    const longestFrom = Array(n).fill(1);

    for (let start = n - 1; start >= 0; start--) {
        for (let later = start + 1; later < n; later++) {
            const canExtend = nums[start] < nums[later];
            if (canExtend) {
                longestFrom[start] = Math.max(
                    longestFrom[start],
                    1 + longestFrom[later]
                );
            }
        }
    }

    return Math.max(...longestFrom);
}

/**
 * Time: O(n^2)  two nested loops over the array
 * Space: O(n)   one dp array of length n
 */
