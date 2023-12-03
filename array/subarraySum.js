class Solution 
{
    //Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, s)
    {   
      let n = arr.length;
        let curr_sum = arr[0];
        let res = [];
        let start = 0, last = 1
  
        for(let i = 1; i<=n;i++) {
            last= i+1;
            if(arr[i]> s) {
                curr_sum = 0;
                res = [];
                continue;
              }
               curr_sum+=arr[i];

              while(curr_sum>s && start<i-1){
                curr_sum = curr_sum - arr[start];
               start++
               }
              if(curr_sum=== s){
              break;
             } 
           }
           if(curr_sum!=s) return [-1]
           
           return [start, last];
       }
}

let s = new Solution();
console.log(s.subarraySum([1,2,3,7,5],5, 7))