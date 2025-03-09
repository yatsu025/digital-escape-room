// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Digital Escape Room!</h1>
      <p>Your mission is to solve the puzzles and escape the room.</p>
      <Link to="/puzzle1">
        <button>Start Game</button>
      </Link>
    </div>
  );
};

export default Home;
