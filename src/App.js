import React from 'react';
import CodeEditor from './components/CodeEditor';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Code Editor</h1>
      </header>
      <main className="main">
        <CodeEditor />
      </main>
    </div>
  );
}

export default App;
