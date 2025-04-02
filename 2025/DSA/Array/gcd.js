function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function gcdI(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(gcd(18, 48))



/**
 * https://leetcode.com/problems/find-greatest-common-divisor-of-array/ 
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    if(!nums.length) return 1;
    
    let min = Infinity;
    let max = -1;
    for(let i=0; i< nums.length; i++){
        if(nums[i]< min) min= nums[i];
        if(nums[i]>max) max= nums[i];
    }
   return gcd(min, max)
};

function gcd(a, b) {
    if (b === 0) return a;

    return gcd(b, a % b);
}



/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    if(!nums.length) return 1;
    
let min = Math.min(...nums);
  let max = Math.max(...nums);
   return gcd(min, max)
};

function gcd(a, b) {
    if (b === 0) return a;

    return gcd(b, a % b);
}