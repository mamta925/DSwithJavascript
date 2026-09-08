/**
 * Do not give autosuggestion
 * @param {} arr 
 */




function merge(arr1, arr2) {
    let i=0;
    let j=0;
    let merged = [];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            merged.push(arr1[i]);
            i++;
        }else{
            merged.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        merged.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        merged.push(arr2[j]);
        j++;
    }
    return merged;
}


function mergeSort(arr, l, r) {

    if (l === r) {
        return [arr[l]];                 
    }

    let mid = Math.floor((l + r) / 2);


    let arr1 = mergeSort(arr,l, mid);
    console.log({arr1,l, mid,r});
    let arr2 = mergeSort(arr, mid + 1, r);
    console.log({arr2,l, mid,r});
    let mergedArray =  merge(arr1, arr2);
    console.log({mergedArray,l, mid,r});
    console.log();
    console.log();
    return mergedArray;


}

const arr1 = [4,3,12,9,8,5];
const res = mergeSort(arr1, 0, arr1.length - 1)
console.log(res);

