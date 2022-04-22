/**
 * Capgemini
 */

// function asyncTasks() {
//     return functionA()
//         .then((valueA) => functionB(valueA))
//         .then((valueB) => functionC(valueB))
//         .then((valueC) => functionD(valueC))
//         .catch((err) => logger.error(err))
// }

// async function  asyncTask() {
//    try{
//     let valueA = await functionA();
//     let valueB = await functionB(valueA);
//     let valueC = await functionC(valueB);
//     return functionD(valueC);
//    } catch(err) {
//     logger.error(err)
//    }

//    https://leetcode.com/problems/best-time-to-buy-and-sell-stock/



// var maxProfit = function(prices) {
   
//      let min = Infinity;
//      let max = 0;
//         for(let i=0  ; i<prices.length; i++) {
       
//              if(prices[i]< min){
//                   min = prices[i]
                 
//              } else if(prices[i] -min> max) {
//                  max = prices[i]- min;
//              }
//     }
    
//     return max;
// };




// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/

// /**
//  * @param {number[]} piles
//  * @return {number}
//  */
// var maxCoins = function(piles) {
//     piles = piles.sort((a,b)=> b-a)
//     console.log(piles)
//     let n = piles.length
//     let profit = 0;
//     for(let i =1; i< n-1 ; i+=2 ) {
//         profit +=piles[i]
//            console.log(i,profit )
//     }
   
//     return profit;
    
// };
// //   1.  3   5   7
// // 9,8,7,6,5,4 3 2 1


// // 3/3 = 1

// // 6/3 = 2
    







// Rewrite this code using async await

// function asyncTask() {
//     return functionA()
//         .then((valueA) => functionB(valueA))
//         .then((valueB) => functionC(valueB))
//         .then((valueC) => functionD(valueC))
//         .catch((err) => logger.error(err))
// }






// async function  asyncTask() {
//   try{
//    let valueA = await functionA();
//    let valueB = await functionB(valueA);
//    let valueC = await functionC(valueB);
//    return functionD(valueC);
//   } catch(err) {
//    logger.error(err)
//   }
 









// Employee

// Name 				Salary

// Ravi				40k
// Rahul				30k
// Rohit				20k

// Write a query that returns the name of the employee having nth highest salary.


// Select e.Name from employee e order by Salary desc limit n-1,1;







// }

var maxProfit = function(prices) {
   
    let min = Infinity;
    let max = 0;
       for(let i=0  ; i<prices.length; i++) {
      
            if(prices[i]< min){
                 min = prices[i]
                
            } else if(prices[i] -min> max) {
                max = prices[i]- min;
            }
   }
   
   return max;
};


maxProfit()

// https://docs.google.com/document/d/1JhLBhGoUWWTXPJnKhmkcwjl0nFHwzRbGdtDyTgfjeds/edit