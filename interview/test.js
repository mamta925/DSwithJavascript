// /*
// Find maximum profit given an array of daily stock-price for a single stock. You must buy before you sell.

// ```
// Given [15, 1, 5, 0]
// Answer: maximum profit of 4 (buy at 1 and sell at 5)
// ```
// */


// // function maxProfit(prices) {
// //    let profit = 0;
// //     for(let i = 0; i< prices.length; i++){
// //         for(let j = i+1; j< prices.length; j++){
               
// //             if(prices[j]>prices[i]){
// //                 let diff = prices[j] - prices[i]
// //                 if(profit<diff){
// //                     profit = diff;
// //                 }
// //             } 
// //         }
// //     }

// //   return profit;
// // }
// function maxProfit(arr) { 
//     let lissf = arr[0]
//     let profit = -1
//     for(let i = 1; i < arr.length; i++) {
//         if(arr[i] > lissf) {
//             profit = Math.max(profit, arr[i] - lissf)
//         } else {
//             lissf = arr[i]
//         }
//     }
//     return profit
// }

 

// const dailyStockPrices = [2, 10, 1, 4];
// console.log(maxProfit(dailyStockPrices)); // #=> 4
// // [ 3, 1, 5,2]
// // [7, 2, 8, 9]
// // [2, 10, 1, 4]
// // [1, 6, 7, 9]
// // [9, 7, 4, 1]
// // [1, 1, 1, 1]
// // [15, 15, 1, 3, 5, 0]
// // */

// let count = 0;
// (function im(){

//    if(count === 0){

//        let count =1;
//        console.log(count)
//        count+=1;
//    }
//      console.log(count)
    
// })();


// var outerFun = function(){
//     if(true){
//         var x = 5;
//         console.log(y)
//     }
//     var nestedFunction = function(){
//         if(true){
//             var y = 7;
//             console.log(x)
//         }
//         if(true){
//             console.log(y)
//         }
//     }
//     return nestedFunction()
// }

// var myFun = outerFun()
// myFun()

// function foo(){
//     let a=b=0;
//     a++;
//     return a;
// }
// foo();
// console.log(typeof a)
// console.log(typeof b)

// let i;
// for(i=0; i<3;i++){
//     const log = ()=>{
//         console.log(i);
//     }
//     setTimeout(log, 100)
// }

let s = "00000001111111"
let l = 0, r = s.length, ans = -1;
while(l<=r){
    var mid = Math.floor((l+r)/2);
    if(s[mid] == '1'){
        ans = mid;
        r = mid-1
    }
    else {
        l = mid+1
    }
}
console.log(ans)

10
-5  
4
-2
3
1
-1
-6
-1
0
5



// // Online C compiler to run C program online
// #include <stdio.h>

// int main() {
//     int n = 841;
//     int x = 1;
//     for (int i = 0; i< 50; i++){
        
//         int nx = (x+n/x)/2;
//         x = nx;
//     }
//     printf("%d", x);
//     return 0;
// }