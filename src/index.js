import Household from "./Houshold.js";
import PowerPlant from "./PowerPlant.js";

export class World {
  constructor() {}

  createPowerPlant() {
      return new PowerPlant();
  }

  createHousehold() {
      return new Household();
  }

  connectHouseholdToPowerPlant(household, powerPlant) {
      household.connectNewPowerPlant(powerPlant);
  }

  connectHouseholdToHousehold(household1, household2) {
      household1.connectNewHousehold(household2);
  }

  disconnectHouseholdFromPowerPlant(household, powerPlant) {
      household.disconnectPowerPlant(powerPlant);
  }

  killPowerPlant(powerPlant) {
      powerPlant.kill();
  }

  repairPowerPlant(powerPlant) {
      powerPlant.repair();
  }

  householdHasEletricity(household) {
      return household.electricity();
  }
}

