



function largestElement(arr){
    let max = 0;
    for(let index = 0; index< arr.length; index++){
         if(arr[index]> max){
            max = arr[index]
         }
    }
    return max;
}

console.log(largestElement([1,2,3,6,8,4]))

function getSecondOrderElements(arr){
    let max = arr[0];
    let second = -1
    let smallest = arr[0];
    let secondSmallest = Infinity
    for(let index = 0; index< arr.length; index++){
         if(arr[index]> max){
            second = max;
            max = arr[index]
         }
         else if(arr[index]< max && arr[index]> second){
            second = arr[index]
         }
         if(arr[index]<  smallest){
            secondSmallest = smallest;
            smallest = arr[index]
         } else if(arr[index]> smallest && arr[index]< secondSmallest) {
            secondSmallest = arr[index];
         }
    }
    return [second, secondSmallest];
}

console.log(getSecondOrderElements([1,2,3,4,5,67,8]))

[1,2,3,4,5,6,7], k = 3


[1,5]