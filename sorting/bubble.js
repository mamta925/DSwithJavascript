
function bubbleSort(arr){
    for(let i = 0;i< arr.length; i++){
        for(let j =0;j< arr.length-1-i; j++){
                if(arr[j]>arr[j+1]){
                    let temp = arr[j+1];
                    arr[j+1]=arr[j];
                    arr[j] =temp;
                }
        } 
    }
    return arr;
}
console.log(bubbleSort([5,2,4,8,4,9,5]))

// Optimized BubbleSort with noSwaps
function bubbleSortO(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
      noSwaps = true;
      for(var j = 0; j < i - 1; j++){
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;         
        }
      }
      if(noSwaps) break;
    }
    return arr;
  }
  
  bubbleSortO([8,1,2,3,4,5,6,7]);