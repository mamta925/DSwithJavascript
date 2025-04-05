
/**
 * just positive
 * @param {*} nums 
 * @param {*} k 
 * @returns 
 */

const subarraySumP = (nums, k) => {
    
    let j=0;
    let sum=0;
    let maxLength = 0;
    for(let i=0; i< nums.length; i++) {

        sum+=nums[i]

        if(sum== k){
            maxLength  = Math.max(maxLength , i-j+1)
        }
        if(sum>k){
            sum-=nums[j];
            j++;
        }
       


    }

  return maxLength;

}

/**
 * https://leetcode.com/problems/subarray-sum-equals-k/description/
 * https://www.youtube.com/watch?v=frf7qxiN2qU&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&index=20 
 * tweak get max length
 * 
 */


const subarraySum = (nums, k) => {
    const map = {};
    let sum = 0;
    let maxLength = 0;

    for(let i=0; i< nums.length; i++) {
        sum=sum+nums[i];
        if(sum === k) {
            maxLength = i+1;
        } 
        
        if(map[sum-k]!== undefined){
            const len  = i- map[sum-k]
            maxLength = Math.max(maxLength,len)

        }
        if(map[sum]===undefined) map[sum] = i;


    }

  return maxLength;

}
const subarraySumC = (nums, k) => {
    let count = 0;
    let currentSum = 0;
    const counts = { 0: 1 }; // We've seen a sum of 0 one time before starting
  
    for (const num of nums) {
      currentSum += num;
      
      // If (currentSum - k) exists, add its frequency to count
      console.log("currentSum  ", currentSum)
      console.log("currentSum - k = ", currentSum - k)
      if (counts[currentSum - k]) {
        count += counts[currentSum - k];
        console.log("count ", count )
      }
      
      // Record the current cumulative sum
      counts[currentSum] = (counts[currentSum] || 0) + 1;
      console.log("counts ",  counts)
    }
    
    return count;
};

// console.log(subarraySum ([1,2,3,0,1,0,1],2))
// console.log(subarraySumP ([1,2,3,0,1,0,1],2))
// console.log(subarraySumC ([1,2,3,0,1,0,1],2))

console.log(subarraySumC ([1,1,-1,1,1,1],2))