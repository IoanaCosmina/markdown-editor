import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
import { tutorial } from './tutorial';

function App() {
  const [markdown, setMarkdown] = useState(tutorial);

  function handleChange(e) {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown} />
      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}

export default App;
