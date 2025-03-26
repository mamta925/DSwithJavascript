// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function(nums) {

//   let i = 0;
//   let j= 1;
    
//     while(j<nums.length && i<j){
//           if(nums[j]!==0 && nums[i] === 0){
//             [nums[i] , nums[j]] =  [nums[j] , nums[i]];
//             i++;
//           } else if(nums[i] !== 0){
//             i++;
//           }
//           j++;
//     }
//     return nums
// };

// // console.log(moveZeroes([0,1,0,3,12]))
// // console.log(moveZeroes([0]))
// console.log(moveZeroes([1,0,1]))

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let l =0;

 
    for(let i =0; i< nums.length; i++){

        if(nums[i] !=0){
            nums[l] = nums[i] ;
            l++;
        }

    }
    while(l<nums.length){
        nums[l] = 0;
        l++;

    }
    
    
    
    
        return nums
  };
  
  // console.log(moveZeroes([0,1,0,3,12]))
  // console.log(moveZeroes([0]))
  console.log(moveZeroes([1,0,1]))