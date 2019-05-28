import React, { Component } from 'react';
import './Army.css';
import marine from '../images/marine.png';
import hydra from '../images/hydra.png';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Army extends Component {

  @observable cnt = 0;

  handleAdd = () => {
    this.cnt++;
  }

  handleRemove = () => {
    this.cnt--;
  }

  render() {
    const { armyModel } = this.props;
    const { image, name, unitName } = armyModel;

    return <div className='armyCell'>
      <div>
        <h4>{`The great ${name} army of ${this.cnt} ${unitName}`}</h4>
        <div>
            {Array(this.cnt).fill(1).map(i => <img src={image === 'hydra' ? hydra : marine} alt='...'/>)} 
        </div>
      </div>
      <div className='buttons'>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    </div>;
  }
}

export default Army;
