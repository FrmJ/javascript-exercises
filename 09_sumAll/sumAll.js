const sumAll = function(start, end) {
    let result = 0;

    if (start < 0 || end < 0) {
        return 'ERROR';
    }

    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR';
    }

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    for (i = start; i <= end; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
