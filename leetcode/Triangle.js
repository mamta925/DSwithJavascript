/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let sum = 0;
    let lastIndex = 0;
    for(let index = 0; index< triangle.length; index++){
        let row = triangle[index];
        let min = Number.POSITIVE_INFINITY;
      
        for(let rowIndex = lastIndex; rowIndex< row.length; rowIndex++){
             if(row[rowIndex]< min){
                min = row[rowIndex]
                lastIndex =rowIndex;
             }
        }
        sum+=min;
    }
    return sum;
};
minimumTotal([[-1],[2,3],[1,-1,-3]])