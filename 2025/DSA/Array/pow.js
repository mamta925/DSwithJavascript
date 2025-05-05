function pow(x, n) {
    let result = 1;
    let absPower = Math.abs(n);

    while (absPower > 0) {
        if (absPower % 2 === 1) {
            result *= x;
        }
        x *= x;
        absPower = Math.floor(absPower / 2);
    }

    return n < 0 ? 1 / result : result;
}

console.log(pow(2, 5));  // 1024
console.log(pow(2, -2));  // 0.25
console.log(pow(3, 0));