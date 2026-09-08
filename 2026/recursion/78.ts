function subsets(nums: number[]): number[][] {
    let subsetResult: number[][] = [];
    let index = 0;
    solve(nums,index,subsetResult)
    return subsetResult;

}

function solve(
    nums: number[],
    index: number,
    subsetResult: number[][],
    output: number[] = []
) {
   if(index === nums.length){
     subsetResult.push([...output])
     return;
   }
   output.push(nums[index]);
   solve(nums,index+1,subsetResult, output)
    output.pop();
     solve(nums,index+1,subsetResult, output)

}

/*
  n = nums.length (number of elements)

  Time:  O(n * 2^n)
         Each index: include or exclude → 2^n subsets.
         At each leaf, [...output] copies up to n items.

  Space: O(n * 2^n) for storing all subsets in subsetResult
         O(n) extra: recursion depth + current output list

  For this bound to be true, stop after the last element:
  n should be nums.length, base case index === n
  (if n is length-1, you skip nums[n] and do not get all 2^n subsets)
*/