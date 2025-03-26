
// console.log(getExpressionSums('100'))
// function getExpressionSums(num)
// {
//    let  N = num.length
  
//     let sumOfExp = 0

//     for (var i = 0; i < 2 ** (N - 1); i++)
//     {

//         let ans_sub = 0
 
//         let subst = num[0]
 
      
//         for (var j = 0; j < N - 1; j++)
//         {
         
//             if (((i >> j) & 1) == 1)
//             {
     
//                 ans_sub += parseInt(subst)
 
           
//                 subst = num[j + 1]
//             }
//             else
 
               
//                 subst += num[j + 1]
 
      
//             if (j == N - 2)
//                 ans_sub += parseInt(subst)
//         }
     
//         sumOfExp += ans_sub
//     }
    
//     if (N == 1) return parseInt(num)
//     else  return sumOfExp
// }
function getExpressionSums(num) {
    const mod = 1000000007n;
    const N = num.length;

    let result = 0n;
    let multiplier = 1n;

    for (let i = N - 1; i >= 0; i--) {
        result = (result + BigInt(parseInt(num[i])) * multiplier) % mod;
        multiplier = (multiplier * 10n) % mod;
    }

    return Number(result);
}

// Example usage

const r = getExpressionSums("100");
console.log(r); // Output: 112

// Example usage
const num = "100";
const result = getExpressionSums(num);
console.log(result); // Output: 112


function getExpressionSums(num) {
    const mod = 1000000007;
  

    let sumOfExp = 0;

    const N = num.length;
    for (let i = 0; i < 1 << (N - 1); i++) {
        let ans_sub = 0;
        let subst = '';

        for (let j = 0; j < N; j++) {
            subst += (num[j]);

            if (j < N - 1 && ((i >> j) & 1)) {
                ans_sub = (ans_sub + parseInt(subst)) % mod;
                subst = '';
            }
        }

        ans_sub = (ans_sub + parseInt(subst)) % mod;
        sumOfExp = (sumOfExp + ans_sub) % mod;
    }

    return sumOfExp%mod;
}

