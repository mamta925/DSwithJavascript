function printLCS(text1, text2) {
    const m = text1.length;
    const n = text2.length;

    // Step 1: Build the DP table
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Step 2: Reconstruct the LCS string from the table
    let i = m, j = n;
    let lcs = [];

    while (i > 0 && j > 0) {
        if (text1[i - 1] === text2[j - 1]) {
            lcs.push(text1[i - 1]);
            i--;
            j--;
        } else if (dp[i - 1][j] >= dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    // The lcs array is built in reverse
    return lcs.reverse().join('');
}


//console.log(longestCommonSubsequence("abcde", "ace"));
console.log(longestCommonSubsequence("aebcd", "aece"));