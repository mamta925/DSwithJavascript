






function getPivot(arr, low , high){
    let pivotElement = arr[low];

   let pIndex= high;
   let i = high;
    while(i>low){

        if(pivotElement >= arr[i]){
            [arr[pIndex], arr[i]] = [arr[i], arr[pIndex]];
            pIndex--
        }
        i--;

    }
    [arr[low], arr[pIndex]] = [arr[pIndex], arr[low]];
    return pIndex;

}

function quickSort(arr,low, high){
    if(low>=high)return;
    let pivotIdx = getPivot(arr, low, high)
    quickSort(arr, low, pivotIdx-1)
    quickSort(arr, pivotIdx+1, high)
}
//4,1,2 3, 54 ,7,8,23,15 
let arr = [4,7,1,23,54,2, 8, 3,15]
quickSort(arr,0,arr.length-1)
console.log(arr)