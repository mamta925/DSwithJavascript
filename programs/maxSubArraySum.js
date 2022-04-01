//common solution
function maxSubarraySum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
     let temp = 0;
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
  
  console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))
  


//Sliding Window Approach


const maxSubArraySumSlidingWindow = (arr, num) =>{
    if ( num > arr.length){
        return null;
      }
      let max = 0;
      let tempMax = 0
      for (let i = 0; i< num; i++){
          max += arr[i]
      }
      tempMax = max
      for (let i = num; i< arr.length; i++){
        tempMax = tempMax - arr[i-num] + arr[i]
       if(tempMax> max){
           max = tempMax
       }
      
    }
    return max;

}
console.log(maxSubArraySumSlidingWindow([2,6,9,2,1,8,5,6,3],3))