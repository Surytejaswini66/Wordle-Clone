import { getRandomWord } from "./WordRepository";

const NUM_ROWS = 6;
const NUM_COLS = 5;

const CELL_STATE = {
  default: {
    value: 0,
    buttonClassName: "btn-primary",
    keyboardClassName: "btn-light",
  },
  incorrectLetter: {
    value: 1,
    buttonClassName: "btn-secondary",
    keyboardClassName: "btn-secondary",
  },
  correctLetter: {
    value: 2,
    buttonClassName: "btn-warning",
    keyboardClassName: "btn-warning",
  },
  correctPos: {
    value: 3,
    buttonClassName: "btn-success",
    keyboardClassName: "btn-success",
  },
};

function initialCellState() {
  return {
    letter: null,
    state: CELL_STATE.default,
  };
}

export function initialGameState() {
  return {
    chosenWord: getRandomWord(),
    rows: Array(NUM_ROWS).fill(Array(NUM_COLS).fill(initialCellState())),
    letters: Array(26).fill(CELL_STATE.default),
    currentRow: 0,
    currentCol: 0,
    gameOver: false,
    guessedWords: [],
    remainingAttempts: NUM_ROWS, // 6 attempts in total
  };
}

export function gameStateAfter_letterPressed(letter, gameState) {
  if (gameState.gameOver || gameState.currentCol === NUM_COLS) {
    return gameState;
  }
  const newRows = JSON.parse(JSON.stringify(gameState.rows));
  newRows[gameState.currentRow][gameState.currentCol] = {
    ...newRows[gameState.currentRow][gameState.currentCol],
    letter: letter,
  };
  return {
    ...gameState,
    rows: newRows,
    currentCol: gameState.currentCol + 1,
  };
}

export function gameStateAfter_enterPressed(gameState) {
  if (gameState.gameOver || gameState.currentCol !== NUM_COLS) {
    return gameState;
  }
  const newRows = JSON.parse(JSON.stringify(gameState.rows));
  const newLetters = JSON.parse(JSON.stringify(gameState.letters));

  var allCorrect = true;
  const currRowArr = newRows[gameState.currentRow];
  const guessedWord = currRowArr.map((cell) => cell.letter).join("");

  const newGuessedWords = [...gameState.guessedWords, guessedWord];
  const newRemainingAttempts = gameState.remainingAttempts - 1;

  for (var i = 0; i < NUM_COLS; i++) {
    if (gameState.chosenWord.charAt(i) === currRowArr[i].letter) {
      currRowArr[i].state = CELL_STATE.correctPos;
    } else if (gameState.chosenWord.indexOf(currRowArr[i].letter) !== -1) {
      currRowArr[i].state = CELL_STATE.correctLetter;
      allCorrect = false;
    } else {
      currRowArr[i].state = CELL_STATE.incorrectLetter;
      allCorrect = false;
    }

    if (
      currRowArr[i].state.value >
      newLetters[getIndexOfLetter(currRowArr[i].letter)].value
    ) {
      newLetters[getIndexOfLetter(currRowArr[i].letter)] = currRowArr[i].state;
    }
  }

  return {
    ...gameState,
    rows: newRows,
    letters: newLetters,
    currentRow: gameState.currentRow + 1,
    currentCol: 0,
    gameOver: allCorrect || newRemainingAttempts === 0,
    guessedWords: newGuessedWords,
    remainingAttempts: newRemainingAttempts,
  };
}

export function gameStateAfter_backspacePressed(gameState) {
  if (gameState.gameOver || gameState.currentCol === 0) {
    return gameState;
  }
  const newRows = JSON.parse(JSON.stringify(gameState.rows));
  newRows[gameState.currentRow][gameState.currentCol - 1] = initialCellState();
  return {
    ...gameState,
    rows: newRows,
    currentCol: gameState.currentCol - 1,
  };
}

export function getIndexOfLetter(letter) {
  return letter.charCodeAt(0) - "A".charCodeAt(0);
}
