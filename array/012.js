var sortColors = function(nums) {
    let low = 0, mid = 0, high =nums.length-1;

  while(mid< high) {
     if(nums[mid] == 0) {
           [nums[mid], nums[low]] = [nums[low], nums[mid]] ;
           mid++;
           low++;
       }
        if(nums[mid] == 1){
            mid++;
        }
         if(nums[mid] == 2){
              [nums[mid], nums[high]] = [nums[high], nums[mid]] ;
                 high--;
         }
  }
  console.log(nums)
  }
  
sortColors([ 1, 0, 2 ])