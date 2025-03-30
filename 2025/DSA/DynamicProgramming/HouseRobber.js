/**
 * https://leetcode.com/problems/house-robber/description/ 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0]
    
    const memo = new Array(nums.length)
    memo.fill(0)
    
    memo[0] = nums[0]
    memo[1] = Math.max(nums[0], nums[1])
    
    for (let i=2; i<nums.length; i++) {
        memo[i] = Math.max(memo[i - 1], memo[i - 2] + nums[i])
    }
    
    return memo[nums.length - 1]
}