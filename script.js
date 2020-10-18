// SELECTORS

// Value Inputs
const inputValue = document.querySelector("#input-value"),
  resultValue = document.querySelector("#result-value"),
  refreshButton = document.querySelector("#refresh-values"),
  // From Feet To
  feetToMiles = document.querySelector("#feet-to-miles"),
  feetToKilometers = document.querySelector("#feet-to-kilometers"),
  feetToYards = document.querySelector("#feet-to-yards"),
  feetToMeters = document.querySelector("#feet-to-meters"),
  feetToInches = document.querySelector("#feet-to-inches"),
  feetToCentimeters = document.querySelector("#feet-to-centimeters"),
  // From Meters To
  metersToMiles = document.querySelector("#meters-to-miles"),
  metersToKilometers = document.querySelector("#meters-to-kilometers"),
  metersToYards = document.querySelector("#meters-to-yards"),
  metersToFeet = document.querySelector("#meters-to-feet"),
  metersToInches = document.querySelector("#meters-to-inches"),
  metersToCentimeters = document.querySelector("#meters-to-centimeters"),
  // From Yards To
  yardsToMiles = document.querySelector("#yards-to-miles"),
  yardsToKilometers = document.querySelector("#yards-to-kilometers"),
  yardsToMeters = document.querySelector("#yards-to-meters"),
  yardsToFeet = document.querySelector("#yards-to-feet"),
  yardsToInches = document.querySelector("#yards-to-inches"),
  yardsToCentimeters = document.querySelector("#yards-to-centimeters"),
  // From Inches To
  inchesToMiles = document.querySelector("#inches-to-miles"),
  inchesToKilometers = document.querySelector("#inches-to-kilometers"),
  inchesToMeters = document.querySelector("#inches-to-meters"),
  inchesToYards = document.querySelector("#inches-to-yards"),
  inchesToFeet = document.querySelector("#inches-to-feet"),
  inchesToCentimeters = document.querySelector("#inches-to-centimeters"),
  // From Centimeters To
  cmToMiles = document.querySelector("#centimeters-to-miles"),
  cmToKilometers = document.querySelector("#centimeters-to-kilometers"),
  cmToMeters = document.querySelector("#centimeters-to-meters"),
  cmToYards = document.querySelector("#centimeters-to-yards"),
  cmToFeet = document.querySelector("#centimeters-to-feet"),
  cmToInches = document.querySelector("#centimeters-to-inches"),
  // From Kilometers To
  kmToMiles = document.querySelector("#kilometers-to-miles"),
  kmToMeters = document.querySelector("#kilometers-to-meters"),
  kmToYards = document.querySelector("#kilometers-to-yards"),
  kmToFeet = document.querySelector("#kilometers-to-feet"),
  kmToInches = document.querySelector("#kilometers-to-inches"),
  kmToCentimeters = document.querySelector("#kilometers-to-centimeters"),
  // From Miles To
  milesToKm = document.querySelector("#miles-to-kilometers"),
  milesToMeters = document.querySelector("#miles-to-meters"),
  milesToYards = document.querySelector("#miles-to-yards"),
  milesToFeet = document.querySelector("#miles-to-feet"),
  milesToInches = document.querySelector("#miles-to-inches"),
  milesToCm = document.querySelector("#miles-to-centimeters");

// EVENT LISTENERS

// Refresh Button
refreshButton.addEventListener("click", clearValues);

// Feet To
feetToMiles.addEventListener("click", convFeetToMiles);
feetToKilometers.addEventListener("click", convFeetToKilometers);
feetToYards.addEventListener("click", convFeetToYards);
feetToMeters.addEventListener("click", convFeetToMeters);
feetToInches.addEventListener("click", convFeetToInches);
feetToCentimeters.addEventListener("click", convFeetToCentimeters);

// Meters To
metersToMiles.addEventListener("click", convMetersToMiles);
metersToKilometers.addEventListener("click", convMetersToKilometers);
metersToYards.addEventListener("click", convMetersToYards);
metersToFeet.addEventListener("click", convMetersToFeet);
metersToInches.addEventListener("click", convMetersToInches);
metersToCentimeters.addEventListener("click", convMetersToCentimeters);

// Yards To
yardsToMiles.addEventListener("click", convYardsToMiles);
yardsToKilometers.addEventListener("click", convYardsToKilometers);
yardsToMeters.addEventListener("click", convYardsToMeters);
yardsToFeet.addEventListener("click", convYardsToFeet);
yardsToInches.addEventListener("click", convYardsToInches);
yardsToCentimeters.addEventListener("click", convYardsToCentimeters);

// Inches To
inchesToMiles.addEventListener("click", convInchesToMiles);
inchesToKilometers.addEventListener("click", convInchesToKilometers);
inchesToMeters.addEventListener("click", convInchesToMeters);
inchesToYards.addEventListener("click", convInchesToYards);
inchesToFeet.addEventListener("click", convInchesToFeet);
inchesToCentimeters.addEventListener("click", convInchesToCentimeters);

// Centimeters To
cmToMiles.addEventListener("click", convCmToMiles);
cmToKilometers.addEventListener("click", convCmToKm);
cmToMeters.addEventListener("click", convCmToMeters);
cmToYards.addEventListener("click", convCmToYards);
cmToFeet.addEventListener("click", convCmToFeet);
cmToInches.addEventListener("click", convCmToInches);

// Kilometers To
kmToMiles.addEventListener("click", convKmToMiles);
kmToMeters.addEventListener("click", convKmToMeters);
kmToYards.addEventListener("click", convKmToYards);
kmToFeet.addEventListener("click", convKmToFeet);
kmToInches.addEventListener("click", convKmToInches);
kmToCentimeters.addEventListener("click", convKmToCm);

// Miles To
milesToKm.addEventListener("click", convMilesToKm);
milesToMeters.addEventListener("click", convMilesToMeters);
milesToYards.addEventListener("click", convMilesToYards);
milesToFeet.addEventListener("click", convMilesToFeet);
milesToInches.addEventListener("click", convMilesToInches);
milesToCm.addEventListener("click", convMilesToCm);

// FUNCTIONS

// Refresh Button
function clearValues() {
  inputValue.value = "";
  resultValue.innerHTML = "";
}

// Convert Functions
let convertedValue;

// Feet to other measurements
function convFeetToMiles() {
  convertedValue = inputValue.value * 0.00018939;
  resultValue.innerHTML = convertedValue + " miles (from feet)";
}
function convFeetToKilometers() {
  convertedValue = inputValue.value / 3280.8;
  resultValue.innerHTML = convertedValue + " kilometers (from feet)";
}
function convFeetToYards() {
  convertedValue = inputValue.value * 0.33333;
  resultValue.innerHTML = convertedValue + " yards (from feet)";
}
function convFeetToMeters() {
  convertedValue = inputValue.value / 3.2808;
  resultValue.innerHTML = convertedValue + " meters (from feet)";
}
function convFeetToInches() {
  convertedValue = inputValue.value * 12;
  resultValue.innerHTML = convertedValue + " inches (from feet)";
}
function convFeetToCentimeters() {
  convertedValue = inputValue.value / 0.032808;
  resultValue.innerHTML = convertedValue + " centimeters (from feet)";
}

// Meters To Other Measurements
function convMetersToMiles() {
  convertedValue = inputValue.value * 0.00062137;
  resultValue.innerHTML = convertedValue + " miles (from meters)";
}
function convMetersToKilometers() {
  convertedValue = inputValue.value / 1000;
  resultValue.innerHTML = convertedValue + " kilometers (from meters)";
}
function convMetersToYards() {
  convertedValue = inputValue.value * 1.0936;
  resultValue.innerHTML = convertedValue + " yards (from meters)";
}
function convMetersToFeet() {
  convertedValue = inputValue.value * 3.2808;
  resultValue.innerHTML = convertedValue + " feet (from meters)";
}
function convMetersToInches() {
  convertedValue = inputValue.value * 39.37;
  resultValue.innerHTML = convertedValue + " inches (from meters)";
}
function convMetersToCentimeters() {
  convertedValue = inputValue.value / 0.01;
  resultValue.innerHTML = convertedValue + " centimeters (from meters)";
}

// Yards to other measurements
function convYardsToMiles() {
  convertedValue = inputValue.value * 0.00056818;
  resultValue.innerHTML = convertedValue + " miles (from yards)";
}
function convYardsToKilometers() {
  convertedValue = inputValue.value / 1093.6;
  resultValue.innerHTML = convertedValue + " kilometers (from yards)";
}
function convYardsToMeters() {
  convertedValue = inputValue.value / 1.0936;
  resultValue.innerHTML = convertedValue + " meters (from yards)";
}
function convYardsToFeet() {
  convertedValue = inputValue.value * 3;
  resultValue.innerHTML = convertedValue + " feet (from yards)";
}
function convYardsToInches() {
  convertedValue = inputValue.value * 36;
  resultValue.innerHTML = convertedValue + " inches (from yards)";
}
function convYardsToCentimeters() {
  convertedValue = inputValue.value / 0.010936;
  resultValue.innerHTML = convertedValue + " centimeters (from yards)";
}

// Inches to other measurements
function convInchesToMiles() {
  convertedValue = inputValue.value * 0.000015783;
  resultValue.innerHTML = convertedValue + " miles (from inches)";
}
function convInchesToKilometers() {
  convertedValue = inputValue.value / 39370;
  resultValue.innerHTML = convertedValue + " kilometers (from inches)";
}
function convInchesToMeters() {
  convertedValue = inputValue.value / 39.37;
  resultValue.innerHTML = convertedValue + " meters (from inches)";
}
function convInchesToYards() {
  convertedValue = inputValue.value * 0.027778;
  resultValue.innerHTML = convertedValue + " yards (from inches)";
}
function convInchesToFeet() {
  convertedValue = inputValue.value * 0.083333;
  resultValue.innerHTML = convertedValue + " feet (from inches)";
}
function convInchesToCentimeters() {
  convertedValue = inputValue.value / 0.3937;
  resultValue.innerHTML = convertedValue + " centimeters (from inches)";
}

// Centimeters to other measurements
function convCmToMiles() {
  convertedValue = inputValue.value * 0.0000062137;
  resultValue.innerHTML = convertedValue + " miles (from cm)";
}
function convCmToKm() {
  convertedValue = inputValue.value / 100000;
  resultValue.innerHTML = convertedValue + " kilometers (from cm)";
}
function convCmToMeters() {
  convertedValue = inputValue.value / 100;
  resultValue.innerHTML = convertedValue + " meters (from cm)";
}
function convCmToYards() {
  convertedValue = inputValue.value * 0.010936;
  resultValue.innerHTML = convertedValue + " yards (from cm)";
}
function convCmToFeet() {
  convertedValue = inputValue.value * 0.032808;
  resultValue.innerHTML = convertedValue + " feet (from cm)";
}
function convCmToInches() {
  convertedValue = inputValue.value * 0.3937;
  resultValue.innerHTML = convertedValue + " inches (from cm)";
}

// Kilometers to other measurements
function convKmToMiles() {
  convertedValue = inputValue.value * 0.62137;
  resultValue.innerHTML = convertedValue + " miles (from km)";
}
function convKmToMeters() {
  convertedValue = inputValue.value * 1000;
  resultValue.innerHTML = convertedValue + " meters (from km)";
}
function convKmToYards() {
  convertedValue = inputValue.value * 1093.6;
  resultValue.innerHTML = convertedValue + " yards (from km)";
}
function convKmToFeet() {
  convertedValue = inputValue.value * 3280.8;
  resultValue.innerHTML = convertedValue + " feet (from km)";
}
function convKmToInches() {
  convertedValue = inputValue.value * 39370;
  resultValue.innerHTML = convertedValue + " inches (from km)";
}
function convKmToCm() {
  convertedValue = inputValue.value * 100000;
  resultValue.innerHTML = convertedValue + " centimeters (from km)";
}

// Miles to other measurements
function convMilesToKm() {
  convertedValue = inputValue.value / 0.62137;
  resultValue.innerHTML = convertedValue + " kilometers (from miles)";
}
function convMilesToMeters() {
  convertedValue = inputValue.value / 0.00062137;
  resultValue.innerHTML = convertedValue + " meters (from miles)";
}
function convMilesToYards() {
  convertedValue = inputValue.value * 1760;
  resultValue.innerHTML = convertedValue + " yards (from miles)";
}
function convMilesToFeet() {
  convertedValue = inputValue.value * 5280;
  resultValue.innerHTML = convertedValue + " feet (from miles)";
}
function convMilesToInches() {
  convertedValue = inputValue.value * 63360;
  resultValue.innerHTML = convertedValue + " inches (from miles)";
}
function convMilesToCm() {
  convertedValue = inputValue.value / 0.0000062137;
  resultValue.innerHTML = convertedValue + " centimeters (from miles)";
}
