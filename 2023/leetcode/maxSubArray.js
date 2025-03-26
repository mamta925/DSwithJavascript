/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = Number.NEGATIVE_INFINITY;
    let sum = 0;
    for(let index = 0; index< nums.length; index++){
        sum+= nums[index];
         if(max<sum){
            max = sum;
         }
         if(sum<0){
            sum = 0;
         }
    }
    return max;
};

maxSubArray([-1])