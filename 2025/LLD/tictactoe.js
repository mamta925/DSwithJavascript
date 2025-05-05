function tictactoe(moves){

    const totalMoves = moves.length;
  

    const moveCounters = new Array(8).fill(0);
  

    for (let moveIdx = totalMoves - 1; moveIdx >= 0; moveIdx -= 2) {
        const [row, col] = moves[moveIdx];

        console.log({moveIdx, row, col})
      

        moveCounters[row]++;
        moveCounters[col + 3]++;
      

        if (row === col) {
            moveCounters[6]++;
        }
      

        if (row + col === 2) {
            moveCounters[7]++;
        }
      
        console.log({moveCounters})

        if (moveCounters[row] === 3 || moveCounters[col + 3] === 3 || moveCounters[6] === 3 || moveCounters[7] === 3) {
  
            return moveIdx % 2 === 0 ? 'A' : 'B';
        }
    }
  

    return totalMoves === 9 ? 'Draw' : 'Pending';
}
tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]])