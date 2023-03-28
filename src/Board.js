import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from 'react-bootstrap/Button';
import './Board.css'
import React, { useState } from 'react';


function Square({ value, onSquareClick }) {
  return (
    <>
      <Button className="button" onClick={ onSquareClick } variant="light border border-2 border-secondary">{ value }</Button>
    </>
  )
}

function Menu({ turn }) {
  return (
    <>
      <div className="card mt-4">
        <div className="card-body">
          <p className="fs-4 mb-0 align-items-center">Your turn <span>{ turn }</span></p>
        </div>
      </div>
    </>
  )
}

function Board() {

  const X = <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
  </svg>;

  const O = <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-circle O" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
  </svg>;

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [clicks, setClicks] = useState(0);
  const [turn, setTurn] = useState(X);

  function winnerChickenDinner() {
    const winningCombos = [
      [squares[0], squares[1], squares[2]],
      [squares[3], squares[4], squares[5]],
      [squares[6], squares[7], squares[8]],
      [squares[0], squares[3], squares[6]],
      [squares[1], squares[4], squares[7]],
      [squares[2], squares[5], squares[8]],
      [squares[0], squares[4], squares[8]],
      [squares[2], squares[4], squares[6]],
    ]

    for (let combo of winningCombos) {
      if (combo[0] === combo[1] && combo[1] === combo[2]) {
        console.log(combo[0])
        return combo[0]
      }
    }
    return null
  }

  function handleClick(index) {
    winnerChickenDinner()
    console.log(`click at square: ${index}`)
    const newSquares = [...squares]
    if (clicks % 2 === 0 && squares[index] === null) {
      newSquares[index] = X;
      setClicks(clicks + 1)
      setTurn(O);
    } else if (squares[index] === null) {
      newSquares[index] = O;
      setClicks(clicks + 1);
      setTurn(X);
    }
    setSquares(newSquares);
  }

  return (
    <>
      <h1 className="mt-5 text-center display-3">Tic-Tac-Toe</h1>

      <div className="container mt-5">
        <div className="grid-container">
          <Square value={ squares[0] } onSquareClick={ () => handleClick(0) } />
          <Square value={ squares[1] } onSquareClick={ () => handleClick(1) } />
          <Square value={ squares[2] } onSquareClick={ () => handleClick(2) } />
          <Square value={ squares[3] } onSquareClick={ () => handleClick(3) } />
          <Square value={ squares[4] } onSquareClick={ () => handleClick(4) } />
          <Square value={ squares[5] } onSquareClick={ () => handleClick(5) } />
          <Square value={ squares[6] } onSquareClick={ () => handleClick(6) } />
          <Square value={ squares[7] } onSquareClick={ () => handleClick(7) } />
          <Square value={ squares[8] } onSquareClick={ () => handleClick(8) } />
        </div>
        <Menu turn={ turn } />
      </div>
    </>
  );
}

export default Board;

