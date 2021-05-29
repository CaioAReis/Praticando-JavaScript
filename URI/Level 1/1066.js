let input = require("fs").readFileSync("stdin", "utf-8");

const values = input.split('\n').map(value => parseInt(value));

let pair = 0;
let odd = 0;
let positives = 0;
let negatives = 0;

values.map(value => {
    if (value > 0) positives++;
    else if (value < 0) negatives++;

    if (Math.abs(value) % 2 === 0) pair++;
    else if (Math.abs(value) % 2 > 0) odd++;
});

console.log(pair + ' valor(es) par(es)');
console.log(odd + ' valor(es) impar(es)');
console.log(positives + ' valor(es) positivo(s)');
console.log(negatives + ' valor(es) negativo(s)');
