const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split('\n');

const [ codeItem1, qtdItem1, valueItem1 ] = lines.shift().split(' ')
    .map(item => parseFloat(item));
const [ codeItem2, qtdItem2, valueItem2 ] = lines.shift().split(' ')
    .map(item => parseFloat(item));

const totalItem1 = qtdItem1*valueItem1;
const totalItem2 = qtdItem2*valueItem2

const totalValue = totalItem1 + totalItem2;

console.log('TOTAL A PAGAR: R$ ' + totalValue.toFixed(2));