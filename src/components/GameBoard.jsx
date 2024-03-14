import { useState } from "react";
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard(){
    const [gameBoard, setGameBoard] = useState(initialGameBoard); 
    function handleSelectSquare(row, col){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(inner => [...inner])];
            updatedBoard[row][col] = 'X';
            return updatedBoard;
        })
    }
    return (
        <ol id="game-board">
        {gameBoard.map((row, index) => (
            <li key={index}>
                <ol>
                    {row.map((col, cindex) => (
                        <li key={cindex}>
                            <button onClick={() => handleSelectSquare(index, cindex)}>{col}</button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}
        </ol>
    )
}