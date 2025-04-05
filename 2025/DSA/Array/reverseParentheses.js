function reverseParentheses(s) {
    let stack = [''];

    for (const char of s) {
        if (char === '(') {
            stack.push('');
        } else if (char === ')') {
            const top = stack.pop().split('').reverse().join('');
            stack[stack.length - 1] += top;
        } else {
            stack[stack.length - 1] += char;
        }
    }

    return stack[0];
}

reverseParentheses("(u(love)i)")