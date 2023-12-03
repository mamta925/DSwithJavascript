/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length
    k = n%k
    reverse(nums, n-k ,n-1)
    reverse(nums, 0 ,n-k-1)
    
    reverse(nums, 0 ,nums.length-1)
    return nums;
};

function reverse(nums, start = 0, end = nums.length-1){
  for(let i = start; i< end; i++){
      while(start<= end){
          [nums[start], nums[end]] = [nums[end], nums[start]];
          start++;
          end--;
      }
  }
  return nums
 
}
console.log(rotate([-1,-100,3,99], 2))

4,3,2,1,7,6,5

1,0,7,8
  l
    