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

//merge sort, max sum , 
//https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/ 
// https://www.geeksforgeeks.org/a-product-array-puzzle/
// https://www.geeksforgeeks.org/find-element-bitonic-array/
// design API gateway
// print sub employees of an employee
// tell the complexity of given code
// Given a linked list, check if it’s a palindrome. 
// Given a string, print all the strings that can be formed from using 2 or more letters of the given string which are valid dictionary words. The function Boolean isValid(string) is already provided that checks if a string a valid dictionary word. 
// count 0 ,1 from boolean array