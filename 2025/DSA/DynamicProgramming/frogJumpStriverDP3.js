/**
 * https://www.geeksforgeeks.org/minimum-cost-for-hopping-frog-to-reach-stair-n/ 
 * 
 * Given an integer array height[] where height[i] represents the height of the i-th stair, a frog
 *  starts from the first stair and wants to reach the top. From any stair i, the frog has two options: 
 * it can either jump to the (i+1)-th stair or the (i+2)-th stair. The cost of a jump is the absolute difference 
 * in height between 
 * the two stairs. The task is to find the minimum total cost required for the frog to reach the top.
 * 
 * 
    Input: 
    
    Output: 20
    Explanation:  Minimum cost is incurred when the frog jumps from stair 0 to 1 then 1 to 3:
    jump from stair 0 to 1: cost = |30 - 20| = 10
    jump from stair 1 to 3: cost = |20-30|  = 10
    Total Cost = 10 + 10 = 20

    Input: heights[] = [30, 20, 50, 10, 40]
    Output: 30
    Explanation: Minimum cost will be incurred when frog jumps from stair 0 to 2 then 2 to 4:
    jump from stair 0 to 2: cost = |50 - 30| = 20
    jump from stair 2 to 4: cost = |40-50|  = 10
    Total Cost = 20 + 10 = 30
 */


    function minEnergyToReachStair(currentStair, heights, memo = {}) {
        if (currentStair === 0) return 0;
    
        if (memo[currentStair] !== undefined) return memo[currentStair];
    

        const jumpOneStep = minEnergyToReachStair(currentStair - 1, heights, memo)
            + Math.abs(heights[currentStair] - heights[currentStair - 1]);
    
   
        let jumpTwoSteps = Infinity;
        if (currentStair > 1) {
            jumpTwoSteps = minEnergyToReachStair(currentStair - 2, heights, memo)
                + Math.abs(heights[currentStair] - heights[currentStair - 2]);
        }
    
        memo[currentStair] = Math.min(jumpOneStep, jumpTwoSteps);
        return memo[currentStair];
    }

    const heights = [30, 20, 50, 10, 40];
const totalMinCost = minEnergyToReachStair(heights.length - 1, heights);
console.log(totalMinCost)
    

function minEnergyToReachStair(n, heights) {
    let energyToReachPrev = 0;       
    let energyToReachPrev2 = 0;    

    for (let currentStair = 1; currentStair < n; currentStair++) {
        const jumpOneStep = energyToReachPrev + Math.abs(heights[currentStair] - heights[currentStair - 1]);

        let jumpTwoSteps = Infinity;
        if (currentStair > 1) {
            jumpTwoSteps = energyToReachPrev2 + Math.abs(heights[currentStair] - heights[currentStair - 2]);
        }

        const currentEnergy = Math.min(jumpOneStep, jumpTwoSteps);
        energyToReachPrev2 = energyToReachPrev;
        energyToReachPrev = currentEnergy;
    }

    return energyToReachPrev;
}
