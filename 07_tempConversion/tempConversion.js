const convertToCelsius = function(far) {
  let cel = ((far - 32) / 1.8)
  return Math.round(cel * 10) / 10
};

const convertToFahrenheit = function(celc) {
  let farh = ((celc * 1.8) + 32)
  return Math.round(farh * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
