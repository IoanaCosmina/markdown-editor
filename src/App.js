import React, { useState } from 'react';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('# Hello World');
  return (
    <div className="app">
      <textarea value={markdown} />
      <div className="preview">Hello World</div>
    </div>
  );
}

export default App;
