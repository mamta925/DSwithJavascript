/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */


var shipWithinDays = function(weights, days) {

    let lowLoad, maxLoad = 0, mid;
    let ans = -1
    
    for(let index = 0; index< weights.length; index++){
        maxLoad+=weights[index];
        if(!lowLoad) lowLoad = weights[index];
        else if(lowLoad<weights[index])  lowLoad = weights[index]
    }

    while(lowLoad<=maxLoad){
       mid = Math.floor((lowLoad+maxLoad)/2);
       let daysRequired = calculateDays(mid, weights)
       if(daysRequired<=days){
        ans = mid;
        maxLoad = mid-1
       } else {
        lowLoad = mid+1;
       }
    }
  return ans;
};

function calculateDays(capacity, weights){
    let days = 1, load = 0;
    for(let index = 0; index< weights.length; index++){
        
        if(capacity>= weights[index]+load){
            load =  weights[index]+load
        } else {
            days++;
            load = weights[index];
        }
    }
    return days;
}
shipWithinDays([1,2,3,1,1],4    )