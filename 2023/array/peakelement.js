class Solution {
    
    peakElement(arr, n)

    {
        
        if(!arr.length) return -1;
        if(arr.length === 1) return 0;
        let peak = 0;
        arr.push(-Infinity)
       for(let i =1; i< arr.length; i++){
            if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
               peak = i;
            }
             else if(arr[i]<arr[i+1]){
                   peak = i+1;
            }
       }
       return peak;
    }
}

let s = new Solution();
console.log(s.peakElement([1,13]))