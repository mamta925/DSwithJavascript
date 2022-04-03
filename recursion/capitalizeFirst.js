String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
  }

//   function capitalizeFirst (array) {
//     let newArr = []
//    for(let i=0; i< array.length; i++){
//        newArr.push(array[i].capitalize())
//    }
//    return newArr;
// }
  
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']




  //with recursion
function capitalizeFirst (array) {
    if (array.length === 1) {
      return [array[0].capitalize()];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0].capitalize();
    res.push(string);
    return res;
  }

  