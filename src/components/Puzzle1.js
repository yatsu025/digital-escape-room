// src/components/Puzzle1.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Puzzle1 = () => {
  const [answer, setAnswer] = useState('');
  const [isSolved, setIsSolved] = useState(false);

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  const checkAnswer = () => {
    if (answer.toLowerCase() === 'key') {
      setIsSolved(true);
    }
  };

  return (
    <div>
      <h1>Puzzle 1: What word unlocks the door?</h1>
      <input
        type="text"
        value={answer}
        onChange={handleInputChange}
        placeholder="Enter your answer"
      />
      <button onClick={checkAnswer}>Submit</button>
      {isSolved && (
        <div>
          <p>Congratulations! You solved Puzzle 1.</p>
          <Link to="/puzzle2">
            <button>Proceed to Puzzle 2</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Puzzle1;
