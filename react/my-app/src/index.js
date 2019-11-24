import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { callExpression } from '@babel/types';

class Square extends React.Component{
    render(){
        return (
            <button className="square">

            </button>
        )
    }
}

class Board extends React.Component{
    renderSquare(i){
        return <Square></Square>
    }
    render(){
        const status = "Next player:X";
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
    render(){
        return(
            <div className="game">
                <div className="game-board">
                    <Board></Board>
                </div>
            <div className="game-info">
            <div>{}</div>
            <ol></ol>
            </div>
            </div>
        )
    }
}

ReactDom.render(
    <Game></Game>,
    document.getElementById("root")
)