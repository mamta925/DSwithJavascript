function reverseArray(arr, l=0, r=arr.length-1){
   if(l>=r)return arr;   //i>=n/2
   [arr[l], arr[r]] = [arr[r], arr[l]]
   reverseArray(arr, l+1, r-1)
   return arr;

}


console.log(reverseArray([1,2,3,4,5,6]))

console.log(reverseArray([]))
console.log(reverseArray([1]))
console.log(reverseArray([1,2]))