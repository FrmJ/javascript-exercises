const palindromes = function (str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "")
                        .toLowerCase();
    const reversedStr = cleanedStr
                        .split("")
                        .reverse()
                        .join("");
    console.log(cleanedStr);
    console.log(reversedStr);
    return cleanedStr == reversedStr;
};
console.log(palindromes("racecar!"));
// Do not edit below this line
module.exports = palindromes;
