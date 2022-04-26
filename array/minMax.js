class Solution{
    getMinMax(arr,n){
        let min = Infinity, max = -Infinity
       for(let i = 0; i< arr.length; i++){
            if(arr[i]<min){
                min = arr[i]
            }
            if(arr[i]>max){
                max = arr[i]
            }
       }
       return [min, max]
    }
}

let s = new Solution();
console.log(s.getMinMax([3, 2, 1, 56, 10000, 167]))