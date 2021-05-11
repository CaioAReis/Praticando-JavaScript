let input = require("fs").readFileSync("stdin", "utf-8");

let [ A, B ] = input.split(' ').map(value => parseInt(value));

if (!A) A = 1;
if (!B) B = 0;

(B % A === 0 || A % B === 0) ? 
console.log('Sao Multiplos') : 
console.log('Nao sao Multiplos');
