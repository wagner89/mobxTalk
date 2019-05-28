import React, { Component } from 'react';
import './Warfield.css';
import Army from './Army';

export default class Warfield extends Component {
  render() {

    return <div className='container'>  
      <div className='warfield'>
        <Army armyModel={ {count: 3, name: 'zerg', unitName: 'zerglings', image: 'hydra' }}/>
        <div className='delimiter'/>
        <Army armyModel={ {count: 3, name: 'terran', unitName: 'marines', image: 'marine' }}/>
      </div>
      <h2>The war was won by the zerg!</h2>
    </div>;
  }
}
