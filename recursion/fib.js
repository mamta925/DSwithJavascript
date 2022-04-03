// fib(4) // 3   1 1 2 3 5
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n){
     if(n < 3 ){
         return 1;
     }
     return fib(n-1) + fib(n-2);
  }

  console.log(fib(4) )