import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import HomeworkPage from './HomeworkPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homework" element={<HomeworkPage />} />
      </Routes>
    </Router>
  );
}

export default App;
