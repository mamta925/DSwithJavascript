import Square from "../square/Square"


const Board = ({board, onClick}) => {


    const renderSquare = (i)=>{
        return <Square value={board[i]} onClick={()=> onClick(i)}></Square>
    }
    return <div className="board">
      {
       [0,1,2].map((row)=>{
           return <div key={row} className="board-row"> 
           {[0,1,2].map((col)=>renderSquare(row*3+col)) }
       </div> 
      })

      }
  

    </div>



}

export default Board