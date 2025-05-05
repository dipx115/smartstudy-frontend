import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to SmartStudy</h1>
      <p>Select a subject and grade:</p>
      <select>
        <option>Math</option>
        <option>Science</option>
        <option>English</option>
      </select>
      <select>
        <option>Grade 5</option>
        <option>Grade 6</option>
        <option>Grade 7</option>
      </select>
      <Link to="/homework">
        <button>Get Homework Help</button>
      </Link>
    </div>
  );
}

export default HomePage;
