// 55. Jump Game
// Return true if you can reach the last index.
// nums[i] = max jump length from index i.
//
// Greedy: track the farthest index you can stand on so far.
// Walk left to right. If i is past that farthest, you are stuck.
// From i you can reach i + nums[i]; stretch the farthest if that is bigger.
// If farthest ever covers the last index, you can finish.

function canJump(nums) {
    let farthest = 0;
    const last = nums.length - 1;

    for (let i = 0; i <= last; i++) {
        if (i > farthest) {
            return false;
        }

        farthest = Math.max(farthest, i + nums[i]);

        if (farthest >= last) {
            return true;
        }
    }

    return true;
}

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([0])); // true

/*
  n = nums.length

  Time:  O(n)  one pass
  Space: O(1)  only farthest / last / i
*/
