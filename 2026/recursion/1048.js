// 1048. Longest String Chain

function longestStrChain(words) {
    const hasMap = {};
    const sequence = {};

    for (let i = 0; i < words.length; i++) {
        hasMap[words[i]] = 1;
    }

    let ans = 1;
    for (const word of words) {
        ans = Math.max(ans, findlongestChain(word, hasMap, sequence));
    }
    return ans;
}

function findlongestChain(s, hasMap, sequence) {
    if (s === "") {
        return 0;
    }
    if (sequence[s] !== undefined) {
        return sequence[s];
    }

    let total = 1;
    for (let j = 0; j < s.length; j++) {
        const next = s.slice(0, j) + s.slice(j + 1);
        if (hasMap[next]) {
            total = Math.max(total, 1 + findlongestChain(next, hasMap, sequence));
        }
    }
    sequence[s] = total;
    return total;
}

console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]));
console.log(longestStrChain(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"]));
console.log(longestStrChain(["abcd", "dbqca"]));

/*
  n = words.length
  L = max word length

  Time:  O(n * L * L)
         Each word is solved once (sequence memo).
         For that word, try L deletions; each slice is O(L).

  Space: O(n) for hasMap + sequence
         O(L) recursion depth
*/
