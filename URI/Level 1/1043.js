let input = require("fs").readFileSync("stdin", "utf-8");

const [ A, B, C ] = input.split(' ').map(value => parseFloat(value));

const maior = Math.max(A, B, C);
const p = [A, B, C].indexOf(maior);
let soma = 0;

[ A, B, C ].map((value, i) => {
    if (i !== p) 
        return soma += value;
});

if (soma > maior)  
    console.log('Perimetro = ' + (A + B + C).toFixed(1));
else
    console.log('Area = ' + (((A + B) * C) / 2).toFixed(1));