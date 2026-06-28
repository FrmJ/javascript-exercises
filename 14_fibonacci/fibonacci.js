const fibonacci = function(x) {
    if (x < 0) {
        return "OOPS";
    }

    let num = parseInt(x);

    if (num <= 1) {
        return num;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
