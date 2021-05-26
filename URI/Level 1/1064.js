let input = require("fs").readFileSync("stdin", "utf-8");

const values = input.split('\n').map(value => parseFloat(value));

let count = 0;

let media = values.reduce((sumValues, value) => {
    if (value > 0) {
        count++;
        sumValues += value;
    }
    return sumValues;
}, 0);

console.log(count + ' valores positivos');
console.log((media/count).toFixed(1));