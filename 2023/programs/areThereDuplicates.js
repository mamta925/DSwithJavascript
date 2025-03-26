
// frequency counter
const areThereDuplicates = (...args) => {
   let mapArr = {}
   let duplicates = false;
   for(const value of args){
    mapArr[value] =   ++mapArr[value] || 1
    if( mapArr[value]> 1){
    duplicates = true;

        break;
    }
   }
return duplicates
}

console.log(areThereDuplicates(1,2,3))
console.log(areThereDuplicates(1,2,2))
console.log(areThereDuplicates('a','b','c', 'a'))



// multiple counter

function areThereDuplicate(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

  // one liner
  function areThereDup() {
    return new Set(arguments).size !== arguments.length;
  }