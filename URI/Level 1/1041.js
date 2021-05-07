let input = require("fs").readFileSync("stdin", "utf-8");

let [ X, Y ] = input.split(' ').map(value => parseFloat(value));

if (isNaN(X)) X = 0;
if (Y === undefined) Y = 0;
console.log(Y);

if (X === 0 && Y === 0) 
    console.log('Origem');
else if (X === 0 && Y !== 0)
    console.log('Eixo Y');
else if (Y === 0 && X !== 0)
    console.log('Eixo X');
else if (X > 0)
    Y > 0 ? console.log('Q1') : console.log('Q4');
else if (X < 0)
    Y > 0 ? console.log('Q2') : console.log('Q3');
    