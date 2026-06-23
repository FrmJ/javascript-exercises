const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((acc, current) => current + acc, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, current) => acc * current, 1);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
	if (x == 0 || x == 1) {
    return 1;
  }

  return x * factorial(x - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
