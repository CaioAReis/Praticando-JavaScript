// Padrão URI JavaScript: 
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const input = require("fs").readFileSync("stdin", "utf-8");

const values = input.split('\n');

const valueA = parseInt(values.shift());
const valueB = parseInt(values.shift());

const prod = (valueA * valueB);

console.log('PROD = ' + prod);