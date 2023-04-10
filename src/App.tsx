import './App.css';
import React from 'react';
import useCounter from '@/hooks/use-counter';

export const App = () => {
  const { count, increment } = useCounter();

  return (
    <div className="container">
      <h1 id="title">ReactJS + Vite + Ts Boilerplate</h1>
      <h2 id="subtext">
        Starting a React project made easier with zero-configuration
        boilerplate.
      </h2>
      <span id="line" />
      <div id="instruction">
        <p>Edit src/App.tsx to start</p>
        <p>Edit src/App.css to change styles</p>
      </div>
      <div id="react-logo" />
      <div>
        <button type="button" onClick={increment}>
          count is: {count}
        </button>
      </div>
    </div>
  );
};

export default App;
