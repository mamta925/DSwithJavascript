function generateSubsequences(str, index=0, path=""){


   if(index>=str.length){
    console.log([path])
    return
   }

    generateSubsequences(str, index+1, path+str[index]);
    generateSubsequences(str, index+1, path);



}



console.log(generateSubsequences("abc"))
console.log(generateSubsequences("ab"))
console.log(generateSubsequences("a"))
//console.log(generateSubsequences("12345"))
// console.log(generateSubsequences([1,2,3]))