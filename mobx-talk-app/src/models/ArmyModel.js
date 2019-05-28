export default class ArmyModel {
  count;

  name;

  constructor({ count = 0, name = 'Army N'}) {
    this.count = count;
    this.name = name;
  }

  get image() {
    return this.name === 'zerg' ? 'hydra' : 'marine';
  }

  addUnit() {
    this.count++;
    alert(this.count);
  }
  
  removeUnit() {
    this.count--;
    alert(this.count);
  }
}
