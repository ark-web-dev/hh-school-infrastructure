import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import hhLogo from './assets/hh.ru.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="hh.ru" target="_blank" rel="noreferrer">
          <img src={hhLogo} className="logo" alt="HH logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>HH HomeWork - Infrastructure</h1>
      <div className="card">
        <button
          type="button"
          onClick={() => setCount((countVal) => countVal + 1)}
        >
          Like {count}
        </button>
      </div>
    </>
  );
}

export default App;
