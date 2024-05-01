const repeatString = function(word, times) {
    if (times < 0) {
        return "ERROR";
    }
    else {
    let string = "";
        for (i = 0; i < times; i ++) {
            string += word;
        }
    return string;
    }
};
const number = Math.floor(Math.random() * 1000)
repeatString("hey", 3)
repeatString('hello', 10)
repeatString('hi', 1)
repeatString('bye', 0)
repeatString('goodbye', -1)
repeatString('odin', number)
repeatString('', 10)

// Do not edit below this line
module.exports = repeatString;