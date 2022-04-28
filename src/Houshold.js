export default class Household {
  constructor() {
    this.powerPlants = [];
    this.households = [];
  }

  connectNewPowerPlant(powerPlant) {
    if (!this.powerPlants.includes(powerPlant)) {
      this.powerPlants.push(powerPlant);
    }
}

  connectNewHousehold(household) {
    if (!this.households.includes(household)) {
      this.households.push(household);
    }
  }

  disconnectPowerPlant(powerPlant) {
    this.powerPlants = this.powerPlants.filter(el => el !== powerPlant)
  }

  electricity() {
      for (let powerPlant of this.powerPlants) {
        if (powerPlant.power === true) {
          return true;
        }
      }

      for (let house of this.households) {
        if (house.powerPlants.include(powerPlants.power === true)) {
          return true
        }
      }

    return false;
  }
}