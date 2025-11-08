const removeFromArray = function(array, ...nums) {
    return array.filter(num => !nums.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
