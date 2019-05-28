import { action, observable, computed } from 'mobx';

export default class WarfieldModel {

  @observable army1;

  @observable army2;

  @computed
  get winner() {
    return this.army1?.count > this.army2?.count ?
      this.army1?.name || "Army 1" : this.army2?.name || "Army 2";
  }

}
