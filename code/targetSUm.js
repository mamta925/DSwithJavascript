// function twoNumberSum(array, targetSum) {
	
// 	let obj = {}
	
// 	for(let value of array){
// 		let neededValue = targetSum - value
// 		if(obj[neededValue] || obj[value]){
// 			return [value, neededValue]
// 		}  else {
// 				obj[neededValue] = value
// 		}
	
// 	}
// 	return []
//   // Write your code here.
// }

// twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)


const arr = new Array(3);
for (let i=0; i<arr.length; i++) {
  arr[i] = new Array(4).fill(1); // Creating an array of size 4 and filled of 1
}
arr[0][0] = 10;
console.log(arr[0][0]); // 10
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1