
// // n= n/2
// // N = n - 1 or n + 1
// // N = 1

// // N = 8
// // N = 8/2 = 4/2 = 2/2 = 1
// // 7-1 6/2 3-1 2/2 =1
// //65535+1   65536/4 = 32768   65534/4  = 32767  
//  function integerReplacement(n) {
     
//      let numberOfCOunt = 0;
//      while(n>1){

//         if(n%2 == 0){
//             n = n/2;
//         } else {  
//           if(n%4 == 1 || n==3){
//                n = n-1
//           } else {
//             n+=1
//           }
//         }
//         numberOfCOunt++;
      

        
//      }
//      return numberOfCOunt
// }

// // 63    64/2 = 32

// //       62/2  31
// console.log(integerReplacement(3))

// Input: nums = [20,1,15,3,10,5,8, 7, 9]
// Output: 4 
// Explanation: 
// The longest arithmetic subsequence is [20,15,10,5].

var longestArithSeqLength = function(nums) {
   
  let n = nums.length;
  if(n<=2){
    return n;
  }

  let obj = {};
  let max = -Infinity
  for(let i = 0; i< n; i++){
    for(let j = i+1; j< n; j++){
         let diff = nums[j]- nums[i]

         if(obj[diff]){
          obj[diff]++;
         } else {
           obj[diff] = 1
         }
         if(obj[diff]>max){
           max = obj[diff]
         }

    
    }
  }
  return max+1;
    
};

console.log(longestArithSeqLength([83,20,17,43,52,78,68,45]))
      