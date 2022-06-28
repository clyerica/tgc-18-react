import Dice from './Dice.js'
import React from 'react'

function App() {
  return (
    <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
      <h1>Dice!!!</h1>
      <Dice/>
    </div>
  );
}

export default App;
