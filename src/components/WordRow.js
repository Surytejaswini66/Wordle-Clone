const WordRow = ({ word, status }) => {
  return (
    <div className="word-row animate__animated animate__fadeIn">
      {word.split("").map((letter, index) => (
        <span
          key={index}
          className={`letter ${status[index]} letter-animation`}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default WordRow;
