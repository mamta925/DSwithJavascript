// Given a matrix of 0s and 1s. Connected 1s of more than 1 size representing an island. Write a function to return total no. of islands in the matrix.
//GoodWorker


// findnear by connected

function isRowColumnInboundary(matrix, row,column, visitedCells) {
       let rowLength = matrix.length;
   let columnLength = matrix[0].length
  return (  row>=0 && column>=0 && row< rowLength && column< columnLength
    && matrix[row][column] === 1 && !visitedCells[row][column]
    )

}

function makeConnection(matrix, row, column, visitedCells){

  let neighborsRow = [-1,-1,-1,0,0,1,1,1]
  let neighborsColumn = [-1,0,1,-1,1,-1,0,1]
  visitedCells[row][column] = true

   for(let i = 0; i<neighborsColumn.length; ++i){
      if(isRowColumnInboundary(

 matrix,
 row+neighborsRow[i],
 column+neighborsColumn[i],
 visitedCells

      ))
      {
        makeConnection(matrix, row+neighborsRow[i], column+neighborsColumn[i], visitedCells)
      }
   }
}


function countIslandNumber(matrix){
    if(!matrix.length) return 0;
    let row = matrix.length;
    let column = matrix[0].length
      let visitedCells = new Array(row)
    for(let i = 0; i< row; i++){
        visitedCells[i] = new Array(column)
    }
    for(let i = 0; i< row; i++){
        for(let j = 0; j< column; j++){
            visitedCells[i][j] = false
        }
    }
    let countOfIsland = 0;
    for(let i = 0; i< row; i++){
        for(let j = 0; j< column; j++){
            if(matrix[i][j]=== 1 && !visitedCells[i][j]){
                   makeConnection(matrix,i,j,visitedCells)
                   countOfIsland++
            }
        }
    }

     return countOfIsland;

}


let matrixData = [[0, 1, 0, 0, 0, 1],[1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1],[1, 1, 0, 0, 0, 1]];
console.log(countIslandNumber(matrixData)) ;
[0, 1, 0, 0, 0, 1],
[1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 1, 1],
[1, 1, 0, 0, 0, 1]