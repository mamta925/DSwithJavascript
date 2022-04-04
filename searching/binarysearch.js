function binarySearch(array, value){
    // add whatever parameters you deem necessary - good luck!
    let left =0;
    let right = array.length-1
    while(left< right){
        let mid = Math.floor((left+right)/2)
        if(array[mid] == value){
            return  mid
        } else if(array[mid] < value){
            left = mid+1
        } else{
            right = mid
        }
    }
    return -1;

  }


  console.log(binarySearch([1,2,3,4,5],7))