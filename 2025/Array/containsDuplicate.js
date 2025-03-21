// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function(nums) {

//     const obj = {};

//     for(let i = 0; i<nums.length; i++){
//         let currentValue = nums[i];
//         if(obj[currentValue]){
//             return true;
//         }
//         obj[currentValue] = true;

//     }
//     return false
    
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    const d = new Set();

    for(n of nums){
        if(d.has(n)){
            return true;
        }
    d.add(n)

    }
    return false
    
};

  console.log(containsDuplicate([1,2,3,1]))
  console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))