import React from 'react';
import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery
        title="Lotto Max"
        numBalls={8}
        maxNum={100}
      />

      <Lottery
        title="Mini Lotto"
        numBalls={4}
        maxNum={50}
      />
    </div>
  );
}

export default App;
