import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Puzzle1 from './components/Puzzle1';
import Puzzle2 from './components/Puzzle2';
import Victory from './components/Victory';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/puzzle1" element={<Puzzle1 />} />
          <Route path="/puzzle2" element={<Puzzle2 />} />
          <Route path="/victory" element={<Victory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
