const leapYears = function(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
};
console.log(leapYears(1984))
console.log(leapYears(1985))

console.log(leapYears(1800))
console.log(leapYears(1600))

// Do not edit below this line
module.exports = leapYears;
