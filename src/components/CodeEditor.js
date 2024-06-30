import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';
import './CodeEditor.css';

// CodeEditor component 
const CodeEditor = () => {
    // State to hold the code input by the user
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);

     // Event handler for changes in the textarea input
  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const highlightedCode = Prism.highlight(code, Prism.languages.javascript, 'javascript');

  return (
    <div className="code-editor">
      <textarea
        className="code-input"
        value={code}
        onChange={handleCodeChange}
      />
      <pre className="code-output">
        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </pre>
    </div>
  );
};

export default CodeEditor;
