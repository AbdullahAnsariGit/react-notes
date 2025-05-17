import React, { useState } from 'react';
import ChatInterface from './components/ChatInterface.jsx';

const App = () => {
  const [apiKey, setApiKey] = useState('');

  return (
    <div className="app-container">
      <h1>OpenAI Chat App</h1>
      <div className="api-key-container">
        <label htmlFor="apiKey">Enter your OpenAI API Key</label>
        <input
          type="text"
          id="apiKey"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="api-key-input"
          placeholder="sk-..."
        />
      </div>
      <ChatInterface apiKey={apiKey} />
    </div>
  );
};

export default App;