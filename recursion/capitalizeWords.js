

function capitalizeWords (array) {
    if(array.length === 1){
        return [array[0].toUpperCase()]
    }  
    let res = capitalizeWords(array.slice(0,-1)) 
    let string = array[array.length-1].toUpperCase()
    res.push(string);
    return res;
  }
  
  let words = ['i', 'am'];
  console.log(capitalizeWords(words)) // ['I', 'AM', 'LEARNING', 'RECURSION']