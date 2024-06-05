import React, { useState } from 'react';
import './App.css'; // Importing CSS for styling

function App() {
  // Using useState hook to manage local state
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, React!</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          type="button"
          onClick={() => setCount(count + 1)} // Increment count when button is clicked
        >
          Count: {count}
        </button>
      </header>
    </div>
  );
}

export default App;
