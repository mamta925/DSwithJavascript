// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8


function fibonacciIterative(n){
    let arr = [0];
    if(n>=1){ arr.push(1)}

    for(let i=2; i<=n; i++){
        arr.push(arr[i-1]+arr[i-2])
    }
 return arr;
}

console.log(fibonacciIterative(4))


function fibonacciNonTail(n) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
  
    const seq = fibonacciNonTail(n - 1);
    const next = seq[seq.length - 1] + seq[seq.length - 2];
    return [...seq, next]; 
  }

function fibonacciRecursive(n, arr= [0, 1]) {

    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    if (arr.length > n) return arr.slice(0, n + 1);
    const currentNumber = arr[arr.length - 1] + arr[arr.length - 2]
  
    arr.push(currentNumber);
    return fibonacciRecursive(n, arr);

  
}

console.log( fibonacciRecursive(4))

function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
  
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
  }


  
  function fibonacciSeriesMemo(n) {
    const memo = { 0: 0, 1: 1 };
    const result = [];
  
    for (let i = 0; i <= n; i++) {
      if (i > 1) {
        memo[i] = memo[i - 1] + memo[i - 2];
      }
      result.push(memo[i]);
    }
  
    return result;
  }