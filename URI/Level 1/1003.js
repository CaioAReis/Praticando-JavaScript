// Padrão URI JavaScript: 
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const input = require("fs").readFileSync("stdin", "utf-8");

const [ A, B ] = input.split('\n').map(item => parseInt(item));

const SOMA = A + B;

console.log('SOMA = ' + SOMA);