/**
 * https://leetcode.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums) {

    let temp = nums[0];
    for(let i=0;i< nums.length-1; i++){

        nums[i]=nums[i+1]
    }
    nums[nums.length-1] = temp;

};

