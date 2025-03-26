function LongestWord(sen) { 
     const splitedString = sen.split(" ")
     let index = 0;
     for(let i = 1 ;i< splitedString.length-1; i++){

        if(splitedString[i].length> splitedString[index].length){
            index = i;
        }

     }
    return splitedString[index]; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord("fun&!! time2323 345678 jhgfdscvbnhjyt retret"));