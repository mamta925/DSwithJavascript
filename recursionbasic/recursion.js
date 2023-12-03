
let name = "mamta"
function printName(n){
    if(n<1) return;
    else console.log(name)
     printName(n-1)
}

printName(2)


function printNumber(i, n){
    if(i>n) return;
    else console.log(i)
     printNumber(i+1, n)
}

printNumber(1,5)

function printNumberRecurse(n){
    if(n<1) return;
    console.log(n)
    printNumberRecurse(n-1)
}

printNumberRecurse(5)

// function sum(i, n){
    
//     sum(i+1, n)
// }

// sum(1,5)

