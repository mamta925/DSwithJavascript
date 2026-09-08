// function maxProfit(prices) {
//     if(prices.length< 1) return 0;
//     let n = prices.length;
//     return solve(prices, 0,n ,true)
    
// };

// function solve(prices, day,n ,buy) {

//     if(day>=n) return 0;
//      let profit = 0;

//     if(buy){
//         let buy = solve(prices, day+1,n ,false) - prices[day];
//          let not_buy = solve(prices, day+1,n ,true);
//          profit = Math.max(buy, not_buy, profit)

//     } else {
//           let sell = solve(prices, day+1,n ,true) + prices[day];
//          let not_sell = solve(prices, day+1,n ,false);
//                  profit = Math.max(sell, not_sell, profit)
//     }

//     return profit;

// }


/**
 * @param {number[]} prices
 * @return {number}
 */


var maxProfit = function( prices, fee) {
    let n = prices.length;
    if(n<2) return 0;
    
    let t = new Array(n).fill(0);
     
     t[1] = Math.max(prices[1]-prices[0]-fee,0)

     for(let i=2;i<n;i++){
         t[i] = t[i - 1];     
        for(let j=0; j<i; j++) {
            let todaysProfit = prices[i]-prices[j]-fee
            let prev_profit = j>0 ? t[j-1]: 0
            t[i] = Math.max(t[i], todaysProfit+prev_profit)
              
        }
     }
     
return t[n-1]
};

console.log(maxProfit([1,3,2,8,4,9], 2))


// function maxProfit(prices){
//     if(prices.length< 1) return 0;
//     let n = prices.length;
//       const dp = Array.from({length: n}, () => [undefined, undefined]);
//     return solve(prices, 0,n ,true,dp)
    
// };

// function solve(prices, day,n ,buy,dp ) {

//     if(day>=n) return 0;
//       if (dp[day][buy ? 1 : 0] !== undefined) return dp[day][buy ? 1 : 0];
//      let best;

//     if(buy){
//        best = Math.max(
//         solve(prices, day+1,n ,false,dp) - prices[day],  solve(prices, day+1,n ,true,dp) 
//        )
//     } else {
//                best = Math.max(
//         solve(prices, day+1,n ,true,dp) + prices[day],  solve(prices, day+1,n ,false,dp) 
//        )
//     }

//    return dp[day][buy ? 1 : 0] = best;

// }
