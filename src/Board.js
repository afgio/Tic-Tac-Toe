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

function Menu() {
  return (
    <>
      <div class="container">
        <div id="card" class="card text-center border rounded mt-1 mt-md-5">
        </div>
      </div>
    </>
  )
}

function Board() {

  const X = <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
  </svg>;

  const O = <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
  </svg>;

  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick() {
    let count = 0;
    if (count % 2 === 0) {
      setSquares(X);
    } else {
      setSquares(O);
    }
    count++;
  }


  return (
    <>
      <h1 className="mt-5 text-center">Tic-Tac-Toe</h1>

      <div className="container mt-5">
        <div className="grid-container">
          <Square value={ squares[0] } onSquareClick={ handleClick } />
          <Square value={ squares[1] } onSquareClick={ handleClick } />
          <Square value={ squares[2] } onSquareClick={ handleClick } />
          <Square value={ squares[3] } onSquareClick={ handleClick } />
          <Square value={ squares[4] } onSquareClick={ handleClick } />
          <Square value={ squares[5] } onSquareClick={ handleClick } />
          <Square value={ squares[6] } onSquareClick={ handleClick } />
          <Square value={ squares[7] } onSquareClick={ handleClick } />
          <Square value={ squares[8] } onSquareClick={ handleClick } />
        </div>
        <Menu />
      </div>
    </>
  );
}

export default Board;

