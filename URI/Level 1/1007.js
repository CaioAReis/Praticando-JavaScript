// Padrão URI JavaScript: 
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const input = require("fs").readFileSync("stdin", "utf-8");

const values = input.split('\n');

const A = parseInt(values.shift());
const B = parseInt(values.shift());
const C = parseInt(values.shift());
const D = parseInt(values.shift());

const diferenca = (A*B - C*D);

console.log('DIFERENCA = ' + diferenca);