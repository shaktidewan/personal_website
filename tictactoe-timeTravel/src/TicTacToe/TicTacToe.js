import React, { useState } from 'react'
import './TicTacToe.css'
import calculateWinner from './CalculateWinner'

function TicTacToe() {
    
    const [turn, setTurn] = useState('x')
    const [history, setHistory] = useState([Array(9).fill('')])
    const [stepNumber,setStepNumber] = useState(0);
    
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = ( num ) => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];

        const squares = [...current];
        console.log("Current squares = ",squares);

        if(winner || squares[num] !== '') {
            return
        }
        squares[num] = turn ? 'X' : 'O'; //i = kun square ho vanera 

        console.log("After update: ",squares)
        setHistory([...timeInHistory,squares]);
        setStepNumber(timeInHistory.length);
        console.log("Step Number: ",stepNumber)
        setTurn(!turn);
    }
    
    const Square = ( {value,onClick} ) => {
        return(
            <div 
                className='squareBox'
                // onClick={() => {
                // handleClick(num);
                // console.log('Square Number: ',num);
                onClick={onClick}
            ><b>{value}</b></div>
        )
    }

    const Board = ({squares,onClick}) => (
        <div className='board'> 
        {squares.map((square,num) => (
            <Square 
            key={num} 
            value={square} 
            onClick={() => onClick(num)} /> 
        ))}
        </div>
        );

        const jumpTo = (step) => {
            setStepNumber(step);
            setTurn(step % 2 ===0 );
            }

        const renderMoves = history.map((_step, move) => {
            //render out button for moving back and forward
            const destination = move ? `move #${move}` : "Go to start";
            console.log(destination);
            return (
            <li key={move}>
            <button onClick={() => jumpTo(move)}>
            {destination}
            </button>
            </li>
            )
            })
   
    return (
        <div className='container'>
            <h3>Turn: {turn}</h3>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            {/* <table>
                <tbody>
                    <tr>
                        <Square  value={history[stepNumber]} onClick={() => handleClick(0)} />
                        <Square  value={history[stepNumber]} onClick={() => handleClick(1)} />
                        <Square  value={history[stepNumber]} onClick={() => handleClick(2)} />
                    </tr>
                    <tr>
                        <Square  value={history[stepNumber]} onClick={() => handleClick(3)} />
                        <Square  value={history[stepNumber]} onClick={() => handleClick(4)} />
                        <Square  value={history[stepNumber]} onClick={() => handleClick(5)} />
                    </tr>
                    <tr>
                        <Square  value={history[stepNumber]} onClick={() => handleClick(6)} />
                        <Square  value={history[stepNumber]} onClick={() => handleClick(7)} />
                        <Square  value={history[stepNumber]} onClick={() => handleClick(8)} />
                    </tr>
                </tbody>
            </table> */}

            {winner && (
                <>
                <b>{winner}</b> is the winner!!!
                </>
                )}

                {renderMoves}
        </div>
    )
}

export default TicTacToe
