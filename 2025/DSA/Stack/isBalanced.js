// Balanced Brackets
// A string of (, ), {, }, [, ] is balanced if every opener has a matching
// closer of the same type, in the right order, and nested pairs are balanced.
//
// Stack: walk left to right.
//   opener  -> push
//   closer  -> the top of the stack must be its matching opener; then pop
// If the stack is empty at the end, every opener was closed. Return YES.
// Anything else (wrong closer, extra closer, leftover opener) is NO.
//
//   '{[()]}'        stack: { [ (    then pop ) ] }     empty -> YES
//   '{[(])}'        stack: { [ (    then ] does not    match ( -> NO

function isBalanced(s) {
    const stack = [];
    const closeToOpen = {
        ")": "(",
        "]": "[",
        "}": "{",
    };

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        const opener = closeToOpen[ch];

        if (!opener) {
            stack.push(ch);
            continue;
        }

        if (stack.length === 0 || stack[stack.length - 1] !== opener) {
            return "NO";
        }
        stack.pop();
    }

    return stack.length === 0 ? "YES" : "NO";
}

console.log(isBalanced("{[()]}")); // YES
console.log(isBalanced("{[(])}")); // NO
console.log(isBalanced("{{[[(())]]}}")); // YES
console.log(isBalanced("{{([])}}")); // YES
console.log(isBalanced("{(([])[])[]}")); // YES
console.log(isBalanced("{(([])[])[]]}")); // NO

/*
  n = s.length

  Time:  O(n)  one pass
  Space: O(n)  stack in the worst case (all openers)
*/
