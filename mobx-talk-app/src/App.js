import React from 'react';
import './App.css';
import Warfield from './components/Warfield';
import WarfieldModel from './models/WarfieldModel';

function App() {

  const warfieldModel = new WarfieldModel();

  return (
    <div className="App">
      <header className="App-header">
        <h2>MobX Wargame</h2>
        <Warfield model={warfieldModel} />
      </header>
    </div>
  );
}

export default App;
