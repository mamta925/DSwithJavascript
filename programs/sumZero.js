
// comm0n solution  //n*2
const sumZero = (arr) =>{
    let pair;
    for(const value of arr){
        let sumZeroValue = -value;
        if(arr.indexOf(sumZeroValue)=== -1 || value === 0){
          continue;
        }
       pair = [value, sumZeroValue] 
    }
    return pair;
}
console.log(sumZero([-3,-2,-1,0,1,2,3]))
console.log(sumZero([-2,0,1,3]))

// pointer solution //only if it is sorted  O(n)
const sumZeroByPointer  = (arr) =>{
   let left = 0;
   let right = arr.length -1;
   while(left<right){
       let sum = arr[left]+arr[right];
       if(sum === 0){
           return [arr[left], arr[right]]
       }
       if(left<right){//(sum>0)
           right --
       }else {
           left ++
       }
   }
}
console.log(sumZeroByPointer([-3,-2,-1,0,1,2,3]))
console.log(sumZeroByPointer([-2,0,1,3]))