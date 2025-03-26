const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

let swap = false;

function selectionSort(array) {
   for(let i=0;i<array.length-1; i++){
    let smallestIndex = i;
    for(let j=i+1;j<array.length; j++){

        if(array[smallestIndex ]>array[j]) {
            smallestIndex = j
        }
    
    }
    [array[i], array[smallestIndex]] = [array[smallestIndex], array[i]]
   }
   return array
}

console.log(selectionSort([9,8,7,6,5,4,3,2,1]));
console.log(selectionSort(numbers));