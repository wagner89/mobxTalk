import React, { Component } from 'react';
import './Warfield.css';
import Army from './Army';
import { observer } from 'mobx-react';
import Devtools from 'mobx-react-devtools';

@observer
class Warfield extends Component {
  render() {
    const { model } = this.props;

    return (
      <div className='container'>  
        <div className='warfield'>

          <Army armyModel={ model.army1 }/>

          <div className='delimiter'/>

          <Army armyModel={ model.army2 }/>

        </div>

        <h2>{`The war was won by ${model.winner}`}</h2>

        <Devtools/>
      </div>
    );
  }
}

export default Warfield;
