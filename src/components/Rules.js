function Rules({ startGameCallback }) {
  return (
    <div className="rules-container animated-rule">
      <h2>Game Rules</h2>
      <p>
        You have 6 attempts to guess the word. <br />
        After each guess: <br />
        1. The letters in your guess will be highlighted. <br />
        2. The highlighting will show if a letter is in the word. <br />
        3. It will also show if the letter is in the correct position.
      </p>
      <button
        className="btn btn-primary start-game-btn"
        onClick={startGameCallback}
      >
        START GAME
      </button>
    </div>
  );
}

export default Rules;
