import { observable, action, computed } from 'mobx';

export default class ArmyModel {
  @observable count;

  @observable name;

  constructor({ count = 0, name = 'Army N'}) {
    this.count = count;
    this.name = name;
  }

  @computed
  get image() {
    return this.name === 'zerg' ? 'hydra' : 'marine';
  }

  @action
  addUnit() {
    this.count++;
  }

  @action
  removeUnit() {
    this.count--;
  }
}
