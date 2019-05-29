import React from 'react';
import './App.css';
import Warfield from './components/Warfield';
import WarfieldModel from './models/WarfieldModel';
import ArmyModel from './models/ArmyModel';
import { Provider } from 'mobx-react';

function App() {

  const warfieldModel = new WarfieldModel(
    new ArmyModel({ count: 5, name: 'zerg'}),
    new ArmyModel({ count: 3, name: 'terran'})
  );

  return (
    <div className="App">
      <header className="App-header">
        <h2>MobX Wargame</h2>
        <Provider model={warfieldModel}>
        <Warfield />
      </Provider>
      </header>
    </div>
  );
}

export default App;
