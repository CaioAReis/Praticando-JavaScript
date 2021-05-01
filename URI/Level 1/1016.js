const input = require("fs").readFileSync("stdin", "utf-8");

const distancia = parseInt(input);

const tempo = distancia * 2;

console.log(tempo + ' minutos');
