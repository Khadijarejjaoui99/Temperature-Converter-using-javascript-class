class Thermostat {
  constructor(fTemp) {
    this._fTemp = fTemp;
    this._cTemp = (5 / 9) * (this._fTemp - 32);
  }
  get cTemperture() {
    return this._cTemp;
  }
  get fTemperture() {
    return this._fTemp;
  }
  set cTemperture(cTemp) {
    this._cTemp = cTemp;
  }
  set fTemperture(cTemp) {
    this._fTemp = (cTemp * 9.0) / 5 + 32;
  }
}
const cTempInput = document.getElementById("cTemp-input");
const fTempInput = document.getElementById("fTemp-input");
const covertToC = () => {
  const temp = new Thermostat(parseFloat(fTempInput.value));
  temp.cTemperture = parseFloat(fTempInput.value);
  cTempInput.value = temp.cTemperture.toFixed(2);
};
const covertToF = () => {
  const temp = new Thermostat(parseFloat(fTempInput.value));
  temp.fTemperture = parseFloat(cTempInput.value);
  fTempInput.value = temp.fTemperture.toFixed(2);
};
