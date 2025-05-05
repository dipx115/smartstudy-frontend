import React, { useState } from 'react';
import axios from 'axios';

function HomeworkPage() {
  const [question, setQuestion] = useState('');
  const [image, setImage] = useState(null);
  const [response, setResponse] = useState(null);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('https://smartstudy-backend-vltk.onrender.com/api/ask', { question });
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };

  return (
    <div>
      <h2>Ask a Question or Upload Homework</h2>
      <textarea
        value={question}
        onChange={handleQuestionChange}
        placeholder="Type your homework question here"
      />
      <input type="file" onChange={handleImageUpload} />
      <button onClick={handleSubmit}>Submit</button>

      {response && (
        <div>
          <h3>Answer:</h3>
          <p>{response.answer}</p>
          <h4>Explanation:</h4>
          <p>{response.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default HomeworkPage;
