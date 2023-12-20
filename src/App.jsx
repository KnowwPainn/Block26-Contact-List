// Importing React and necessary assets
import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ContactList from './components/ContactList'; // Import the ContactList component

// Functional component App
const App = () => {
  // State for counting
  const [count, setCount] = React.useState(0);

  return (
    <>
      <div>
        {/* Links to Vite and React websites */}
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* Heading */}
      <h1>Vite + React</h1>
      {/* Card with button and message */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* Read the docs message */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* ContactList component */}
      <ContactList />
    </>
  );
};

// Exporting the App component
export default App;
