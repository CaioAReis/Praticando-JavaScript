// Padrão URI JavaScript: 
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const input = require("fs").readFileSync("stdin", "utf-8");

const [ A, B, C ] = input.split('\n')
    .map(value => parseFloat(value));

const average = (A*2 + B*3 + C*5) / 10;

console.log("MEDIA = " + average.toFixed(1));