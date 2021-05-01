const input = require("fs").readFileSync("stdin", "utf-8");
const [ horasViagem, velocidadeMedia ] = input.split('\n');

const litrosNecessarios = (horasViagem * velocidadeMedia) / 12;

console.log(litrosNecessarios.toFixed(3));
