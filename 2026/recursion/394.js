function decodeString(s) {
    const stack = [];
    let num = 0;
    let str = "";

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (ch >= "0" && ch <= "9") {
            num = num * 10 + Number(ch);
        } else if (ch === "[") {
            stack.push(str, num);
            str = "";
            num = 0;
        } else if (ch === "]") {
            const k = stack.pop();
            const prev = stack.pop();
            str = prev + str.repeat(k);
        } else {
            str += ch;
        }
    }

    return str;
 }

console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));
console.log(decodeString("ef2[abc]"));

/*
  n     = length of input string s (encoded)
  m     = length of the final decoded string
  maxK  = largest repeat number in s (example: 3 in "3[a]", 100 in "100[abc]")

  Time:  O(maxK * n)  because each ']' copies the current chunk k times.
         Also O(m) in practice: you must write every character of the output.
         m can be much bigger than n when k is large or brackets are nested.

  Space: O(n + m)
         n: stack holds one previous string + number per '['
         m: decoded result stored in str (and temporary strings from repeat)
*/
