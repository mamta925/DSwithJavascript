

/**
 Create a function that reverse a string
 Example Hi My name is Mamta 
 Output atmaM si eman iH
 */


 // By js method
// function reverse(str){

//   return str.split("").reverse().join("");

  
// }

function reverse(str){
        if(!str || str.length<2|| typeof str !== 'string'){
        return str;
    }
    let reverseString = "";
    for(let i =str.length-1;i>=0;i-- ){
        reverseString+=str[i] //  Time Complexity: O(n²) ❌ (due to string concatenation creating a new string each time in JS)

    }
    return reverseString;
}
function reverse(str){
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
      backwards.push(str[i]);
    }
    return backwards.join('');
  }
  
  const reverse3 = str => [...str].reverse().join('');
 

// function reverse(str){

//     //check input

//     if(!str || str.length<2|| typeof str !== 'string'){
//         return str;
//     }

//     const reversedSentence  = str.split("")
//     let i = 0;
//     let j = reversedSentence.length-1;

//     while(i<=j){
//         [reversedSentence[i], reversedSentence[j]] =    [reversedSentence[j], reversedSentence[i]] 
//         i++;
//         j--;
//     }
    
//    return reversedSentence.join("")
//  }
 

console.log(reverse("12321"))