const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

let swap = false;

function bubbleSort(array) {
   for(let i=0;i<array.length-1; i++){
    swap = false;
    for(let j=0;j<array.length-i-1; j++){

        if(array[j]>array[j+1]) {
            [array[j], array[j+1]] = [array[j+1], array[j]]
            swap = true;
        }
    
    }
    if (!swap) break;
   }
   return array
}

console.log(bubbleSort([9,8,7,6,5,4,3,2,1]));
console.log(bubbleSort(numbers));