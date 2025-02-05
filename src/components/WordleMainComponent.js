import { useState } from "react";
import {
  gameStateAfter_backspacePressed,
  gameStateAfter_enterPressed,
  gameStateAfter_letterPressed,
  initialGameState,
} from "../gamelogic/GameStateManager";
import GameBoard from "./GameBoard";
import Keyboard from "./Keyboard";
import Rules from "./Rules";
import "../styles.css"; 

function WordleMainComponent() {
  const [gameState, setGameState] = useState(initialGameState());
  const [gameStarted, setGameStarted] = useState(false); // Track if game has started

  const startGame = () => setGameStarted(true); // Function to start the game
  const reset = () => setGameState(initialGameState());

  const letterCallback = (letter) =>
    setGameState(gameStateAfter_letterPressed(letter, gameState));
  const enterCallback = () =>
    setGameState(gameStateAfter_enterPressed(gameState));
  const backspaceCallback = () =>
    setGameState(gameStateAfter_backspacePressed(gameState));

  const shareOnWhatsApp = () => {
    const message = `I played Wordle! My guessed words: ${gameState.guessedWords.join(
      ", "
    )}. Try beating my score!`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {!gameStarted ? (
        <Rules startGameCallback={startGame} /> // Display Rules page first
      ) : (
        <>
          <h1 className="main text-center text-light animated-header">
            <strong>W O R D L E</strong>
          </h1>
          <hr className="divider" />
          <div className="row">
            <div className="col-12 text-center">
              <button className="btn btn-info game-info-button">
                <a
                  href="https://www.wikihow.com/Play-Wordle"
                  target="_blank"
                  rel="noreferrer"
                >
                  HELP
                </a>
              </button>
              &nbsp;
              <button className="btn btn-warning reset-btn" onClick={reset}>
                NEW GAME
              </button>
            </div>
          </div>
          <br />
          <GameBoard rows={gameState.rows} />
          <br />

          {/* Game Over Popup */}
          {gameState.gameOver && (
            <>
              <div className="overlay"></div>

              <div className="popup animate__animated animate__zoomIn">
                <h4 className="text-center">
                  {gameState.correctWordGuessed
                    ? `Congrats! You won: ${gameState.chosenWord}`
                    : `Game Over! The word was: ${gameState.chosenWord}`}
                </h4>
                <p>Guessed Words: {gameState.guessedWords.join(", ")}</p>
                <p>Remaining Attempts: {gameState.remainingAttempts}</p>
                <button
                  className="btn btn-success play-again-btn"
                  onClick={reset}
                >
                  Play Again
                </button>
                &nbsp;
                <button
                  className="btn btn-primary share-btn"
                  onClick={shareOnWhatsApp}
                >
                  Share on WhatsApp
                </button>
              </div>
            </>
          )}

          <Keyboard
            gameOver={gameState.gameOver}
            letters={gameState.letters}
            letterCallback={letterCallback}
            enterCallback={enterCallback}
            backspaceCallback={backspaceCallback}
          />
        </>
      )}
    </>
  );
}

export default WordleMainComponent;
