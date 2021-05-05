let input = require("fs").readFileSync("stdin", "utf-8");

const [ lanche, quantidade ] = input.split(' ')
    .map(value => parseInt(value));

const tabelaLanche = [ 4, 4.50, 5, 2, 1.50 ];

const total = tabelaLanche[lanche - 1] * quantidade;

console.log('Total: R$ ' + total.toFixed(2));
