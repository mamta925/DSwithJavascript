
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array, low = 0, high=array.length-1) {

    if(low>=high){
        return;
    }
   let mid = Math.floor((low+high)/2)
    mergeSort(array,low, mid);
  mergeSort(array,mid+1, high)
   mergeSortedArrays(array, low, mid, high)
}

function mergeSortedArrays(array, low, mid, high) {

    const sortedArray = [];
    let left = low;
    let right = mid+1;
    while(left<=mid && right<=high){
        if(array[left]<=array[right]){
            sortedArray.push(array[left])
            left++;
        } else {
            sortedArray.push(array[right])
            right++;
        }

    }
    while(left<=mid){
        sortedArray.push(array[left])
        left++;
    }
    while(right<=high){
        sortedArray.push(array[right])
        right++;
    }
    for(let i =low;i<=high;i++){
        array[i] = sortedArray[i-low]
    }

}





 mergeSort(numbers);
console.log(numbers);