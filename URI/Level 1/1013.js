const input = require("fs").readFileSync("stdin", "utf-8");

const [ A, B, C ] = input.split(' ').map(value => parseInt(value));
const maiorAB = (A + B + Math.abs(A - B)) / 2;
const maior = maiorAB > C ? maiorAB : C;

console.log(maior + ' eh o maior');