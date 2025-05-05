
import { useState } from 'react';
import './App.css';
import Board from './components/board/Board';
import calculateWinner from './App.util';

function App() {

  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [board, setBoard] = useState(new Array(9).fill(null))
  const [winner, setWinner] = useState(null)
  const [gameStatus, setGameStatus] = useState('');
  const [isCelebrating, setIsCelebrating] = useState(false); 
  const [text, setText] = useState('')

  function handlePlayerMove(place){

    if(board[place] || winner) {
      return;
    }
    board[place] = currentPlayer;
    const newBoard = [...board];
    newBoard[place] = currentPlayer;
    setBoard(newBoard);

    let W = calculateWinner(board)

    if(W) {
      setWinner(W) 
      setGameStatus('Completed');
      setIsCelebrating(true); 
      setText(`Congratulations, Player ${W}!`);
      setTimeout(() => {
        setText('');  // Clear the text after 1 second
        setIsCelebrating(false);  // Hide the celebration after 1 second
      }, 1000);
      onReset()
      return
    }
    
    if (!newBoard.includes(null)) {
      setGameStatus('Draw');
      setIsCelebrating(true); 
      setText(`Match Draw!`);
      setTimeout(() => {
        setText('');  // Clear the text after 1 second
        setIsCelebrating(false);  // Hide the celebration after 1 second
      }, 1000);
      setCurrentPlayer('X')
      onReset()
    } else {
  
      let nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      setCurrentPlayer(nextPlayer);
    }
    
  
    
  }
  function onReset(){
    let resetBoard = new Array(9).fill(null);

    setBoard([...resetBoard]);
    setCurrentPlayer('X')
    setWinner(null)
    setGameStatus('');
  }
  return (
    <div className="game">

      <h1> Tic Tac Toe</h1>

      Game Board

      {isCelebrating && (
        <div className="celebration-overlay show">
          <p>{text}</p>
        </div>
      )}
      <div className="game-board">
      <Board board= {board} onClick={handlePlayerMove}></Board>
      </div>
      <div className="game-info">
      <p className={winner ? '' : 'blink'}>Current Player: {currentPlayer}</p>
  
      </div>
      <button className="reset-button" onClick={onReset}>Reset</button>
    </div>
  );
}

export default App;


