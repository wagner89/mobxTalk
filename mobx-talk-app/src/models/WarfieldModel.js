export default class WarfieldModel {

  army1;

  army2;

  constructor(army1, army2) {
    this.army1 = army1;
    this.army2 = army2;
  }

  get winner() {
    const { army1, army2 } = this;

    return army1?.count > army2?.count ?
      army1?.name || "Army 1" : army2?.name || "Army 2";
  }

}
