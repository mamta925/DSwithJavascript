const merge2SortedArray = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let mergedArray = [];
  let k = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray[k] = arr1[i];
      i++;
    } else {
      mergedArray[k] = arr2[j];
      j++;
    }
    k++;
  }

  while (i < arr1.length) {
    mergedArray[k] = arr1[i];
    i++; k++;
  }
  while (j < arr2.length) {
    mergedArray[k] = arr2[j];
    j++; k++;
  }
  return mergedArray
};
//console.log(merge2SortedArray([3,4,5,6], [2,4,5,12,23,33,34,56]))

function mergeSort(arr){
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    let newArr = merge2SortedArray(left, right)
    return newArr;
}
console.log(mergeSort([3,4, 2,5]))