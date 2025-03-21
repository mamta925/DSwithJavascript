// var rotate = function(nums, k) {

//     const array = [];
//     k = k%nums.length;

//     for(let i=0; i< nums.length; i++){
//         let newIndex = i+k;
//         if(newIndex> nums.length-1) newIndex  = newIndex -nums.length
//         array[newIndex] = nums[i]
//     }
//     return array
    
// };


// console.log(rotate([1,2,3,4,5,6,7], 3))
// console.log(rotate([-1,-100,3,99], 2))



//rotate by 1 onle
var rotate1 = function(nums, k) {

     const lastElement = nums[nums.length-1]

    for(let i=nums.length-1; i>0; i--){
        nums[i] = nums[i-1];
      
    }
    nums[0] = lastElement 

    return nums;
};


// console.log(rotate1([1,2,3,4,5,6,7], 1))
// console.log(rotate1([-1,-100,3,99], 1))


//rotate by k , brute force
var rotate2 = function(nums, k) {
    k = k%nums.length;
   
    const temp = [];
    for (let i = 0; i < k; i++) {
        temp[i] = nums[nums.length - k + i];
      }


   for (let i = nums.length - k - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }
    for(let i =0; i< k;i++){
        nums[i] = temp[i]
    }


    return nums;
};


console.log(rotate2([1,2,3,4,5,6,7], 3))
console.log(rotate2([-1,-100,3,99], 2))

var rotate = function(nums, k) {
    k = k % nums.length;

    const reverse = (start, end) => {
      while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
      }
    };
  
    reverse(0, nums.length - 1);        
    reverse(0, k - 1);                  
    reverse(k, nums.length - 1);      
  
    return nums;
};


console.log(rotate([1,2,3,4,5,6,7], 3))
console.log(rotate([-1,-100,3,99], 2))