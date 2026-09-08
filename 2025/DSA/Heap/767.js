// 767. Reorganize String
// Same idea as even-slot greedy (not a priority queue).
// Count letters, sort by frequency desc, write on even indices then odd.

var reorganizeString1 = function (S) {
    let hash = {};
    for (let c of S) hash[c] = hash[c] + 1 || 1;

    let sort = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);
    let res = [];
    let index = 0;

    for (let i = 0; i < sort.length; i++) {
        let occur = hash[sort[i]];
        if (occur > parseInt((S.length + 1) / 2)) return "";
        for (let j = 0; j < occur; j++) {
            if (index >= S.length) index = 1;
            res[index] = sort[i];
            index += 2;
        }
    }
    return res.join("");
};

console.log(reorganizeString1("aab")); // aba
console.log(reorganizeString1("aaab")); // ""
console.log(reorganizeString1("vvvlo")); // vlvov

/*
  Example 1: S = "aab"   n = 3   limit = parseInt((3+1)/2) = 2

  hash:  { a: 2, b: 1 }
  sort:  ["a", "b"]     (highest count first)

  letter a, occur 2  (2 <= 2, ok)
    j=0  index=0 < 3     res[0] = "a"    index = 2
    j=1  index=2 < 3     res[2] = "a"    index = 4

  letter b, occur 1  (1 <= 2, ok)
    j=0  index=4 >= 3    wrap index = 1
         res[1] = "b"    index = 3

  res = ["a", "b", "a"]  ->  "aba"

  Example 2: S = "aaab"  n = 4   limit = parseInt((4+1)/2) = 2

  hash:  { a: 3, b: 1 }
  sort:  ["a", "b"]
  letter a, occur 3  (3 > 2)  ->  ""

  Time:  O(n + k log k)  k unique letters (<= 26)
  Space: O(n)
*/
