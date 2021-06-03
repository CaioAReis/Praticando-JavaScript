let input = require("fs").readFileSync("stdin", "utf-8");

const values = input.split('\n').map(value => parseInt(value));

values.shift();

let ins = 0, out = 0;

values.forEach(value => {
    if (value >= 10 && value <= 20) ins++;
    else out++;
});

console.log(ins + ' in');
console.log(out + ' out');
