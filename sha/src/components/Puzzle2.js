// src/components/Puzzle2.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Puzzle2 = () => {
  const [answer, setAnswer] = useState('');
  const [isSolved, setIsSolved] = useState(false);

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  const checkAnswer = () => {
    if (answer.toLowerCase() === 'password') {
      setIsSolved(true);
    }
  };

  return (
    <div>
      <h1>Puzzle 2: What's the secret password?</h1>
      <input
        type="text"
        value={answer}
        onChange={handleInputChange}
        placeholder="Enter your password"
      />
      <button onClick={checkAnswer}>Submit</button>
      {isSolved && (
        <div>
          <p>Congratulations! You solved Puzzle 2.</p>
          <Link to="/victory">
            <button>Proceed to Victory</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Puzzle2;
