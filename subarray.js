let arr =  [-2,-5,-4,-8.-7,-10, -1]

let sum = -Infinity;
let currentSum = 0

for(let i =0; i< arr.length; i++) {
    currentSum = currentSum+arr[i]   
     
    if(sum< currentSum){
         sum = currentSum
    } 
    if (currentSum< 0){
        currentSum = 0
    }


}
console.log(sum)


//oracle

//merge, max sum, 
//https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/ 
// https://www.geeksforgeeks.org/a-product-array-puzzle/
// https://www.geeksforgeeks.org/find-element-bitonic-array/