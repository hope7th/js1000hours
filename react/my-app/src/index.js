import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


// class Square extends React.Component{
//     render(){
//         return (
//             <button 
//             className="square"
//             onClick={()=> this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         )
//     }
// }

//函数式组建
function Square(props){
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            squares:Array(9).fill(null),
            xIsNext:true,
        }
    }
    renderSquare(i){
        return <Square value={this.props.squares[i]} onClick={()=>this.props.onClick(i)}></Square>
    }
    // handleClick(i){
    //     const squares = this.props.squares.slice();
    //     squares[i] = this.props.xIsNext?'X':'0';
    //     this.setState({squares:squares,xIsNext:!this.state.xIsNext})
    // }
    render(){
        // const winner = calculateWinner(this.state.squares);
        // let status;
        // if(winner){
        //     status = "Winner：" + winner;
        // }else {
        //     status = "Next player:"+(this.state.xIsNext?'X':'0');
        // }

        return (
            <div>
                <div className="status">{status}</div>
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
        )
    }
}
class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          history: [{
            squares: Array(9).fill(null),
          }],
          xIsNext: true,
        };
    }
    handleClick(i){
        const history = this.state.history;
        const current = history[history.length-1];
        const squares = current.squares.slice();
        if(calculateWinner(squares)||squares[i]){
            return
        }
        squares[i] = this.state.xIsNext?'X':'0';
        this.setState(
            {
                history:history.concat([
                    {squares}
                ])
            }
        )
    }
    render(){
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return(
            <div className="game">
                <div className="game-board">
                    <Board></Board>
                </div>
            <div className="game-info">
            <div>{status}</div>
            <ol></ol>
            </div>
            </div>
        )
    }
}

function calculateWinner(squares) {
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
  }

ReactDom.render(
    <Game></Game>,
    document.getElementById("root")
)