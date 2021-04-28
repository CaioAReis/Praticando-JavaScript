// Padrão URI JavaScript: 
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const input = require("fs").readFileSync("stdin", "utf-8");

const [ valueA, valueB ] = input.split('\n').map(value => parseFloat(value));

const average = (valueA * 3.5 + valueB * 7.5) / 11;

console.log('MEDIA = ' + average.toFixed(5));