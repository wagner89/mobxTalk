import React, { Component } from 'react';
import './Army.css';
import marine from '../images/marine.png';
import hydra from '../images/hydra.png';
import { observer } from 'mobx-react';

@observer
class Army extends Component {

  handleAdd = () => {
    this.props.armyModel.addUnit();
  }

  handleRemove = () => {
    this.props.armyModel.removeUnit();
  }

  render() {
    const { armyModel } = this.props;
    const { count, name, image } = armyModel;
    const cnt = count && count >= 0 ? count : 0;

    return <div className='armyCell'>
      <div>
        <h4>{`The great ${name} army of ${count}`}</h4>
        <div>
            {Array(cnt).fill(1).map(i => <img src={image === 'hydra' ? hydra : marine} alt='...'/>)} 
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
