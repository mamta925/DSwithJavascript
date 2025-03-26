/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0, high =  nums.length-1;
    while(low<=high){
        let  mid = Math.floor((low+high)/2)
          if(nums[mid] == target) return mid;
          else if(nums[mid] > target) return high = mid-1;
          else low = mid+1
    }
    return -1;
};
search()