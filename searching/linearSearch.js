function linearSearch(arr, num){
    // add whatever parameters you deem necessary - good luck!
    for(const [index, value] of arr.entries()){
        if(value === num){
             return index;
        }
    }
    return -1;
  }

  console.log(linearSearch([10,15,56,53,23],15))