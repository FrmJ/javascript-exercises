const convertToCelsius = function(temp) {
  const convertedTemp = (temp - 32) * 5 / 9; 
  return hasDecimal(convertedTemp) ? parseFloat(convertedTemp.toFixed(1))
        : convertedTemp; 
};

const convertToFahrenheit = function(temp) {
  const convertedTemp = (temp * 9 / 5) + 32;
  return hasDecimal(convertedTemp) ? parseFloat(convertedTemp.toFixed(1))
        : convertedTemp;
};

const hasDecimal = function(temp) {
  return temp % 1 !== 0;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
