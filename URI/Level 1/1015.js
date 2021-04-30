const input = require("fs").readFileSync("stdin", "utf-8");

const [ ponto1, ponto2 ] = input.split('\n');

const [ pontoX1, pontoY1 ] = ponto1.split(' ')
    .map(value => parseFloat(value));
const [ pontoX2, pontoY2 ] = ponto2.split(' ')
    .map(value => parseFloat(value));

const distancia = Math.sqrt(
    Math.pow(pontoX2 - pontoX1, 2) + 
    Math.pow(pontoY2 - pontoY1, 2)
);

console.log(distancia.toFixed(4));
