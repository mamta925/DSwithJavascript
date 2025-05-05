import Square from "../Square/Square"


const Board = ({ squares, onClick }) => {
    const renderSquare = (i) => (
      <Square value={squares[i]} onClick={() => onClick(i)} />
    );
  
    return (
      <div className="board">
        {[0, 1, 2].map((row) => (
          <div key={row} className="board-row">
            {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
          </div>
        ))}
      </div>
    );
  };
  
  export default Board;