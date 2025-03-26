function selection(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let j = i + 1;
    let index = i;
    while (j < arr.length) {
      if (arr[j] < arr[index]) {
        index = j;
      }
      j++;
    }
    if(i!=index){
        [arr[i], arr[index]] = [arr[index], arr[i]]
    }
  }
  return arr;
}
console.log(selection([5, 2, 4, 8, 4, 9, 5]));
