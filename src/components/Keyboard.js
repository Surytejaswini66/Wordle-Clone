import { getIndexOfLetter } from "../gamelogic/GameStateManager";
function Keyboard({
  gameOver,
  letters,
  letterCallback,
  enterCallback,
  backspaceCallback,
}) {
  const keyArrangement = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <>
      {keyArrangement.map((row, rowIndex) => (
        <div key={"row_" + rowIndex} className="col-12 text-center key-row">
          {row.map((letter, colIndex) => (
            <button
              style={{ margin: "2px" }}
              key={"cell_" + rowIndex + "_" + colIndex}
              className={`btn btn-lg ${
                letters[getIndexOfLetter(letter)].keyboardClassName
              } key-button animate__animated animate__fadeIn`}
              onClick={() => letterCallback(letter)}
              disabled={gameOver}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
      <div className="col-12 text-center key-row">
        <button
          style={{ margin: "2px" }}
          className="btn btn-light key-action-button animate__animated animate__zoomIn"
          onClick={enterCallback}
          disabled={gameOver}
        >
          ENTER
        </button>
        <button
          style={{ margin: "2px" }}
          className="btn btn-light key-action-button animate__animated animate__zoomIn"
          onClick={backspaceCallback}
          disabled={gameOver}
        >
          BACKSPACE
        </button>
      </div>
    </>
  );
}

export default Keyboard;
