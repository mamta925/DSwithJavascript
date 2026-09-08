// 3893. Maximum Team Size with Overlapping Intervals
// Employees work on closed intervals [startTime[i], endTime[i]].
// Two people interact if their intervals share at least one time point.
// A team is valid if some member (the hub) interacts with every other member.
// Return the largest possible team.
//
// The hub does not need the whole team to meet at one instant.
// Example 3: [3,8] overlaps both [4,5] and [6,7], even though those two
// never overlap each other. So the answer is NOT "max intervals at a point".
//
// For hub [s, e], interval [a, b] overlaps it iff a <= e and b >= s.
// Equivalently: drop people fully to the left (b < s) and fully to the right
// (a > e). Overlap count = n - (ends < s) - (starts > e).
// Sort all starts and all ends, then binary search that for every hub.

function upperBound(arr, target) {
    // first index with value > target  ==  count of values <= target
    let lo = 0;
    let hi = arr.length;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (arr[mid] <= target) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
}

function maximumTeamSize(startTime, endTime) {
    const n = startTime.length;
    const starts = startTime.slice().sort((a, b) => a - b);
    const ends = endTime.slice().sort((a, b) => a - b);

    let best = 1;
    for (let i = 0; i < n; i++) {
        const s = startTime[i];
        const e = endTime[i];
        const fullyLeft = upperBound(ends, s - 1); // ends < s
        const startOnOrBeforeE = upperBound(starts, e); // starts <= e
        const overlap = startOnOrBeforeE - fullyLeft;
        best = Math.max(best, overlap);
    }
    return best;
}

console.log(maximumTeamSize([1, 2, 3], [4, 5, 6])); // 3
console.log(maximumTeamSize([2, 5, 8], [3, 7, 9])); // 1
console.log(maximumTeamSize([3, 4, 6], [8, 5, 7])); // 3
console.log(maximumTeamSize([2, 5, 6, 8], [5, 6, 10, 9])); // 3  hub [5,6] or [6,10]

/*
  n = startTime.length

  Time:  O(n log n)  sort starts/ends, then one binary search pair per hub
  Space: O(n)        copied sorted arrays
*/
