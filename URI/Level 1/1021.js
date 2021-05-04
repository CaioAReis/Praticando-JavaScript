let input = require("fs").readFileSync("stdin", "utf-8");

input = input.replace(',', '.');

let value = parseFloat(input);
let qtdMoney = 0;
const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log('NOTAS:');
for (let nota of notas) {
    qtdMoney = parseInt(value / nota);
    value = value % nota;
    console.log(qtdMoney + ' nota(s) de R$ ' +  nota + '.00');
}

console.log('MOEDAS:');
for (let moeda of moedas) {
    qtdMoney = parseInt(value / moeda);
    value = (value % moeda).toFixed(2);
    console.log(qtdMoney + ' moeda(s) de R$' + moeda.toFixed(2));
}
