function insertion(arr){
    for(let i = 0; i<arr.length;i++){
        for(let j = 0; j< i; j++){
            if(arr[i]<arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr;
}

console.log(insertion([5, 2, 4, 8, 4, 9, 5]));

function insertionSort(arr){
	var currentVal;
    for(let i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])