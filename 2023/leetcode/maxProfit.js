/**
 * 122. Best Time to Buy and Sell Stock II
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let max = 0;
    for(let index=1; index< prices.length ; index++){
        	if(prices[index] > prices[index-1]) {
			max += prices[index] - prices[index-1]
		}
    }
    return max
};
maxProfit([7,1,5,3,6,4])