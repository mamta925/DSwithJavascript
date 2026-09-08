/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid: number[][]): number {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const memo: number[][] = Array.from({ length: m }, () =>
        new Array(n).fill(-1)
    );
    return maxWays(0, 0, m, n, obstacleGrid, memo);
};

function maxWays(
    i: number,
    j: number,
    m: number,
    n: number,
    obstacleGrid: number[][],
    memo: number[][]
): number {

  if((i>=m  || j >= n )|| obstacleGrid[i][j] == 1) {
    return 0;
  }
 if (i === m - 1 && j === n - 1) return 1;
 if (memo[i][j] !== -1) return memo[i][j];
 memo[i][j] = maxWays(i, j+1,m,n,obstacleGrid, memo) + maxWays(i+1, j,m,n,obstacleGrid, memo)
 return memo[i][j]
}