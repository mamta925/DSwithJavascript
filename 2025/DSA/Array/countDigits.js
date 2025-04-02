/**
 * https://leetcode.com/problems/count-the-digits-that-divide-a-number/
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count =0;
    let n=num;
   
     while (n>0){
        let digit = n%10;
        if(num%digit === 0 ) count++;
        n = Math.floor(n/10);
     }
     return count;
    
};

countDigits(7)