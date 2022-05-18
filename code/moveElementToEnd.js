function moveElementToEnd(array, toMove) {
    // Write your code here.
      let j = array.length -1
       for(let i=0; i<=j; i++){
         if(array[i] === toMove){
                   while(array[j] == toMove){
                       j--;
                   }
                   if(j>i){
                    let temp = array[j];
                    array[j] = array[i];
                    array[i] = temp;
                   }

               }   
     }
       return array
  }
  moveElementToEnd([2,1,2,2,2,3,4,2], 2)