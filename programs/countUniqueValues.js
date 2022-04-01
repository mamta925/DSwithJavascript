// common solution

const countUniqueValue = (arr)=>{
    let count = 0;
     for (let i=-1; i<arr.length-1; i++){
         if(arr[i]== arr[i+1]){
             continue;
         }
         count++;
     }
     return count
}
console.log(countUniqueValue([2,2,3,4,4]))


//pointer solution
const countUniqueValuePointerSolution = (arr)=>{
    if(!arr.length){
        return 0;
    }
     let i = 0;
     for (let j=1; j<arr.length; j++){
        if(arr[i]!== arr[j]){
            i++;
            arr[i]= arr[j]
        }
     }
     return i+1
}
console.log(countUniqueValuePointerSolution([2,2,3,4,4]))