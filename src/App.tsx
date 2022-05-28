import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import axios from 'axios';

const baseURL = `${process.env.REACT_APP_BASE_URL}/connections/create-invitation`;

function App() {
  React.useEffect(() => {
    console.log("base url", process.env.REACT_APP_BASE_URL);
    
    axios.post(baseURL, {}).then((response) => {
      console.log("HHHHHHHH2", response);
    });
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}

      <h2>Test Section</h2>
      <div style={styles.test}>
        <button>Test SSI</button>
      </div>
    </div>
  );
}

const styles = {
  test: {
   marginBottom: 50
  },
} as const;

export default App;
