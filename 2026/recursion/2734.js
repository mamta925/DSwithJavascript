// 2734. Lexicographically Smallest String After Substring Operation
// You must change exactly one substring: each letter becomes the previous
// letter (b -> a). a -> z is bad, so never change a unless the string is all a's.
// Skip leading a's, then decrease the first run of non-a letters. If the
// whole string is a's, change only the last a to z.

function smallestString(s) {
    const chArray = s.split("");
    let i = 0;
    const n = chArray.length;

    while (i < n && chArray[i] === "a") {
        i++;
    }

    if (i === n) {
        chArray[n - 1] = "z";
        return chArray.join("");
    }

    while (i < n && chArray[i] !== "a") {
        chArray[i] = prev(chArray[i]);
        i++;
    }

    return chArray.join("");
}

function prev(ch) {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    return abc[abc.indexOf(ch) - 1];
}

console.log(smallestString("cbabc"));
console.log(smallestString("aa"));
console.log(smallestString("acbbc"));
console.log(smallestString("leetcode"));

/*
  n = s.length

  Time:  O(n)  one left-to-right pass
  Space: O(n)  char array because JS strings cannot be edited in place
*/
