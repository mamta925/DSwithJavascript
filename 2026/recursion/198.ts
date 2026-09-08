function rob(nums: number[]): number {
    return solve(nums, 0);
    
};

function solve(
    nums: number[],
    idx: number,
    mem: Record<number, number> = {}
): number {
  if(idx>=nums.length){
    return 0;
  }
  if(mem[idx]!= undefined) return mem[idx];
  //choose
  let take = nums[idx] + solve(nums, idx+2,mem)
  //not choose
  let skip = solve(nums, idx+1,mem)
  mem[idx] = Math.max(take, skip);
  return mem[idx];
}

/*
  n = nums.length (number of houses)

  Time:  O(n)
         Each index is solved once, then reused from mem.
         Without mem this would be O(2^n) (take or skip at every house).

  Space: O(n)
         mem has one entry per index, and the recursion stack is at most n.
*/