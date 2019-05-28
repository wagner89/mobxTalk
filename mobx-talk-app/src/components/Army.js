import React, { Component } from 'react';
import './Army.css';
import marine from '../images/marine.png';
import hydra from '../images/hydra.png';

export default class Army extends Component {
  render() {
    const { armyModel } = this.props;
    const { count, image, name, unitName } = armyModel;

    return <div className='armyCell'>
      <div>
        <h4>{`The great ${name} army of ${count} ${unitName}`}</h4>
        <div>
            {Array(count).fill(1).map(i => <img src={image === 'hydra' ? hydra : marine} alt='...'/>)} 
        </div>
      </div>
      <div className='buttons'>
        <button>Add</button>
        <button>Remove</button>
      </div>
    </div>;
  }
}
