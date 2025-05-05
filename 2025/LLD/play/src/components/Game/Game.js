

import React, { useState } from 'react';
import Board from '../Board/board';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const currentSquares = history[stepNumber];

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const currentSquares = newHistory[newHistory.length - 1].slice();
    if (calculateWinner(currentSquares) || currentSquares[i]) {
      return;
    }
    currentSquares[i] = xIsNext ? 'X' : 'O';
    setHistory(newHistory.concat([currentSquares]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(currentSquares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (currentSquares.every(Boolean)) {
    status = 'Draw';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Game;



