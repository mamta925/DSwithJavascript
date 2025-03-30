/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maximumSumSubsequence = function(nums, queries) {

    let sum = 0
        for(let i=0;i< queries.length; i++){
            const array = [...nums];
            let [index, value] = queries[i]
            array[index] = value;
         sum = sum+ findMaxSum(array)
        }
        return sum;
    };
    
    function findMaxSum(nums){
        if(nums.length === 0) return 0;
        if(nums.length === 1) return nums[1];
    
        let prev1 = nums[0];
        let prev2 = 0;
    
        for(let i=1; i<nums.length;i++){
            const pick = nums[i]+prev2;
            const nonPick = prev1;
            const current = Math.max(pick, nonPick)
    
            prev2 = prev1;
            prev1=current;
    
        }
    
        return prev1;
    }

    maximumSumSubsequence([3,5,9], [[1,-2],[0,-3]])