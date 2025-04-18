/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */

const MOD = 1e9 + 7;
var maximumSumSubsequence = function(nums, queries) {

let sum = 0
    const array = [...nums];
    for(let i=0;i< queries.length; i++){

        let [index, value] = queries[i]
        array[index] = value;
     sum = (sum+ findMaxSum(array)%MOD)
    }
    return sum;
};

function findMaxSum(nums){
    if(nums.length === 0) return 0;
    if(nums.length === 1) return Math.max(0, nums[0]);

    let prev1 = Math.max(0, nums[0]);
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
   // maximumSumSubsequence([3,5,9], [[1,-2],[0,-3]])

    maximumSumSubsequence([-1], [[0,1]])