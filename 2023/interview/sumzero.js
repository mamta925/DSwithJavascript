let array = [4, 2, -3, 1, 6, -4]   // 

function sumZero(arr){
    let currentSum = 0
   for (let i =0; i< arr.length; i++){
       currentSum = arr[i]
     for(let j =i+1;j <= arr.length; j++){
          if(currentSum === 0){
            printArray(arr, i, j)
          }
         currentSum+=arr[j]
     }

   }


}
function printArray(arr, i, j) {
    let newArray = []
    for( let k = i; k<j;k++){
        newArray.push(arr[k])
    }
    console.log(newArray)
}
sumZero(array)



