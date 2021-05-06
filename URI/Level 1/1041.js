let input = require("fs").readFileSync("stdin", "utf-8");

let [ X, Y ] = input.split(' ').map(value => parseFloat(value));

console.log(X);

if (isNaN(X)) X = 0;
if (Y === undefined) Y = 0;

if (X > 0) {
    Y > 0 ? console.log('Q1') : console.log('Q4');
    if (Y === 0) console.log('Eixo Y');
} else if (X === 0)
    Y === 0 ? console.log('Origem') : console.log('Eixo X');
else if (X < 0) {
    Y > 0 ? console.log('Q2') : console.log('Q3');
    if (Y === 0) console.log('Eixo Y');
}  
