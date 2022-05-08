

// let arr = [1,2,3,4,5]  

// //let first = 0;
// //let sum = arr.reduce((previous, current)=>previous+current, first)




// Array.prototype.reduceArray  = function(callback, firstValue){
//    let values = this;

//    values.forEach(value=>{
//     firstValue = firstValue!== undefined? callback(firstValue, value): value
//    })
//     return firstValue;

// }

// function pure(a, b){
//     return (a*5 +b*5)
// }





// let sum = arr.reduceArray((a,b)=> a+b)
// console.log(sum)
// let emp1 = {
//     id: 1,
//     name: "John"
//   }
  
//   let emp2 = {...emp1};
//   emp2.id = 2;
//   emp2.name = "Jake";

//   console.log(emp1, emp2)

// let array =  [2,4,[3,21,[90,45,12],[3,21]]]

// let stack = []
// function flat (arr){
//     for(let i = 0; i< arr.length; i++){
//         if(typeof arr[i] === 'number'){
//             stack.push(arr[i]) 
//         } else {
//             flat(arr[i])
//         }
//     }
//     return stack
// }

// let flatArray = flat(array)
// console.log(flatArray)
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are
// adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.
// Example 1:
// Input: nums = [2,0,2,1,1, 0]
// Output: [0,0,1,1,2,2]
// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

  let countZero = 0;
  let countOne = 0;
  let countTwo = 0;
  let input = [2,0,2,1,1, 0];  
  let sortedArray = []
  for(let i = 0; i< input.length; i++){
        if(input[i]==0){
            countZero++;
        }
        if(input[i]==1){
            countOne++;
        }
        if(input[i]==2){
            countTwo++;
        }
  }
  let i = 0
  while(countZero){ 
    input[i] = 0
    countZero--;
    i++

}
  while(countOne){ 
    input[i] = 1
    countOne--;
    i++
  }
  while(countTwo){ 
    input[i]= 2
    countTwo--;  
    i++
}

console.log(input) 


/// 0,1,2