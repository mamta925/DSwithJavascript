

function sameFrequency(num1, num2){
    let number1 = num1.toString()
      let number2 = num2.toString()

      if(number1.length!== number2.length){
          return false;
      }
      let mapNumber1 = {}
      for (const num of number1){
        mapNumber1[num] = ++ mapNumber1[num]|| 1
      }
      for (const num of number2){
        if(mapNumber1[num]){
            mapNumber1[num]--;
            if(mapNumber1[num] === 0) delete mapNumber1[num];
        }
      }
      if(Object.keys(mapNumber1).length){
        return false;
    }
    return true;
}
console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 222))


//another approach

function sameFreq(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }