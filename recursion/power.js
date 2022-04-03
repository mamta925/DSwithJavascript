// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(value, powerValue){
    if(powerValue == 0){
        return 1;
    }

   return value *power(value, powerValue-1);
    
}

console.log(power(2,0))
console.log(power(2,2))
console.log(power(2,4))