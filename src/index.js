import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (solvePuzzle(squares) || squares[i]) {
      return;
    }
    
    if (i === 3 || i === 5) {
      squares.fill(null)
    }
    else {
      squares[i] = 'X' ;
    }
    this.setState({
      squares: squares,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = solvePuzzle(this.state.squares);
    if (winner) {
      return (
        <MainPage />
      );
    }

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 1,
      blah: 2,
    };
  }

  render() {
    return (<div>You did it!</div>)
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

// change to be an E will activate something
function solvePuzzle(squares) {
  const lines = ['X', 'X', 'X', null, 'X', null, 'X', 'X', 'X'];
  for (let i = 0; i < lines.length; i++) {
    if (squares[i] !== lines[i]){
      return null;
    }
  }
  return true;
}