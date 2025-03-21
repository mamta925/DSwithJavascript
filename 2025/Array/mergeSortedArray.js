

function mergeSortedArrays(arr1, arr2){

    const newArray = [];

let i = 0;
let j =0;

while(i< arr1.length && j < arr2.length){

    if(arr1[i]< arr2[j]){
        newArray.push(arr1[i]);
        i++;
    } else {
        newArray.push(arr2[j]);
        j++;
    }
    
}

if(i< arr1.length){
    while(i<arr1.length){
        newArray.push(arr1[i]);
        i++;
    }
}
if(j< arr2.length){
    while(j<arr2.length){
        newArray.push(arr2[j]);
        j++;
    }
}
return newArray;
}
















const newSortedArray = mergeSortedArrays([], [3,4,6,30]);
console.log(newSortedArray)