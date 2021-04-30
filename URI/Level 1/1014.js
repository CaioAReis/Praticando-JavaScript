const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split('\n');

const A = parseInt(lines.shift());
const B = parseFloat(lines.shift());

const consumoMedio = A / B;

console.log(consumoMedio.toFixed(3) + ' km/l');