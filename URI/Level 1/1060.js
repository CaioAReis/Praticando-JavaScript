let input = require("fs").readFileSync("stdin", "utf-8");

const values = input.split('\n').map(value => parseInt(value))
    .reduce((accumulator, value) => {
        if (value > 0) 
            accumulator++;

        return accumulator;
}, 0);

console.log(values + ' valores positivos');

/* 
    O .reduce() é usado para quando precisamos reduzir 
    um array a um ÚNICO valor através de uma função.
*/