const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function partition(arr, left, right) {
    const pivot = arr[left]
    let i= left;
    let j= right;
    while(i<j){
        while(arr[i]<=pivot &&i<right ){
            i++
        }
        while(arr[j]>pivot && j>=left+1){
            j--
        }
        if(i<j)
        [arr[i], arr[j]] = [arr[j], arr[i]]

        

    }

    [arr[left], arr[j]] = [arr[j], arr[left]]
    return j;

   
  
}

function quickSort(array, left, right) {
    if(left<right){
        const partitionPoint = partition(array, left, right);
        quickSort(array, left, partitionPoint-1);
        quickSort(array, partitionPoint+1, right)
    }
 

}



//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);