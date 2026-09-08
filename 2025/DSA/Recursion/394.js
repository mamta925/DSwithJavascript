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
            console.log(stack)
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
