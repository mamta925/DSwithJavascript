//Sliding Window Approach


const minSubArrayLen = (nums, sum) =>{
    let total =0, start = 0, end =0, minLen = Infinity;

      while(start< nums.length){
            if(total< sum  && end <nums.length){
                total+= nums[end];
                end++;
            }
            else if(total >= sum){
                minLen = Math.min(minLen, end-start);
                total -= nums[start];
                start++;
            } else {
                break;
              }
      }
      
      return minLen === Infinity ? 0 : minLen;
}
console.log(minSubArrayLen([2,3,1,2,4,3],7))