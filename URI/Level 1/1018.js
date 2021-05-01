const input = require("fs").readFileSync("stdin", "utf-8");

let value = parseInt(input);
let qtdNotas = 0;
const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(value);

for (let nota of notas) {
    qtdNotas = parseInt(value / nota);
    value = value % nota;
    console.log(qtdNotas + ` nota(s) de R$ ${nota},00`);
}
