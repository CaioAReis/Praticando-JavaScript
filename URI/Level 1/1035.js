let input = require("fs").readFileSync("stdin", "utf-8");

const [ A, B, C, D ] = input.split(' ').map(value => parseInt(value));

let valores = (
        (B > C && D > A) && 
        (C + D > A + B) && 
        (C > 0 && D > 0) && 
        (A % 2 === 0) 
   ) ? 'Valores aceitos' : 'Valores nao aceitos';

console.log(valores);