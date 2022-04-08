function rotateSum(arr){
     let maxSum = 0;
    for(let i = 0; i< arr.length; i++){
        let currentSum = 0;
        let tempArr = []
        for(let j = 0; j<arr.length; j++){
            let index = (i+j)%arr.length;
            tempArr.push(arr[index])
            currentSum +=  j* arr[index]
        }
        maxSum = Math.max(maxSum, currentSum)
        console.log(tempArr,   "currentSum ", currentSum)
    }
   return maxSum;
}

//1 2 3
// 2,3,1

