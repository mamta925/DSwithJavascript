/**

                        [0]
                   /         \
                +1            +2
              [1]             [2]
            /    \          /     \
          +1     +2      +1       +2
        [2]     [3]     [3]       [4] ✅
       /  \    /  \    /  \      
    [3] [4]  [4]     [4]          
     |    ✅   ✅       ✅           
    [4] ✅
 * 
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {


    function dfs(sum){
        if(sum==n ) return 1;
        if(sum>=n ) return 0;

        return dfs(sum+1)+ dfs(sum+2)

    }

  return dfs(0)
    
};

console.log(climbStairs (5))



* @param {number} n
* @return {number}
*/
var climbStairs = function(n) {
    if(n<=2) return n;
    let prev = 1;
    let curr = 1;
    for(let i=2; i<=n;i++){
      [curr, prev] = [curr+prev, curr]
    }
return curr;
};