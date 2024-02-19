import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square.jsx"
import { TUNRS } from "./constants.js"
import { checkWinnerFrom, checkEndGame } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(TUNRS.X)
  const [winner, setWinner] = useState(null)

  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TUNRS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    //no actualizamos si ya hay algo en esa posición
    if (board[index] || winner) return
    //actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //cambiar el turno
    const newTurn = turn == TUNRS.X ? TUNRS.O : TUNRS.X
    setTurn(newTurn)
    //revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner)
    }else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className="game">
        {
          board.map((square , index ) => {
            return(
              <Square 
                key={index} 
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn==TUNRS.X}>
          {TUNRS.X}
        </Square>
        <Square isSelected={turn==TUNRS.O}>
          {TUNRS.O}
        </Square>
      </section>

        <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
