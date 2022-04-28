export default class PowerPlant {
  constructor() {
      this.power = true;
  }

  kill() {
      this.power = false;
  }

  repair() {
      this.power = true;
  }
}