// Padrão URI JavaScript: 
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const input = require("fs").readFileSync("stdin", "utf-8");

const raio = parseFloat(input);

const area = 3.14159 * (raio * raio);

console.log('A=' + area.toFixed(4));