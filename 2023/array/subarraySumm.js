/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function(nums, k) {
//     let count= 0;
//    loop1: for(let i = 0; i< nums.length; i++) {
//         let sum = 0;
//       loop2: for(let j = i; j< nums.length; j++) {
//             sum = sum+nums[j];
//             if(sum == k){
//                 count++;
                
//             } 
//        }
//     }
//     return count;
// };

/**
 * *Time: O(N)
 * *Space: O(N)
 */
// Runtime: 141 ms, faster than 48.60% of JavaScript online submissions for Subarray Sum Equals K.
// Memory Usage: 53.7 MB, less than 36.93% of JavaScript online submissions for Subarray Sum Equals K.
const subarraySum = (nums, k) => {
	const map = {}; // cumulative sum: frequency
	let output = 0;
	let sum = 0; // running path sum

	map[0] = 1; // initialize with cumulative sum of 0

	for (const num of nums) {
		sum += num; // add to current path sum

		const prefix = sum - k;
		if (map[prefix]) output += map[prefix]; // add count of current prefix sum

		// add current sum to map
		if (!map[sum]) map[sum] = 1;
		else map[sum]++;
	}

	return output;
};
subarraySum([1,-1,0],0)