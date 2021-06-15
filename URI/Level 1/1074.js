let input = require("fs").readFileSync("stdin", "utf-8");

const values = input.split('\n').map(value => 
    parseInt(value.replace(',', '\n')));

values.shift();

values.forEach(value => {
    if (value !== 0) {
        if (value > 0) {
            if (value % 2 === 0) console.log("EVEN POSITIVE");
            else console.log("ODD POSITIVE");
        } else if (value < 0) {
            if (value % 2 === 0) console.log("EVEN NEGATIVE");
            else console.log("ODD NEGATIVE");
        }
    } else console.log("NULL");
});
