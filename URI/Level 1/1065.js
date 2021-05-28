let input = require("fs").readFileSync("stdin", "utf-8");

const values = input.split('\n').map(value => parseInt(value));

const pares = values.reduce((accumulatior, value) => {
    if (value % 2 === 0)
        accumulatior++;
    return accumulatior;
}, 0);

console.log(pares + ' valores pares');