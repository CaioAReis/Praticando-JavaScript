const input = require("fs").readFileSync("stdin", "utf-8");

let days = parseInt(input);

const years = parseInt(days / 365);
const months = parseInt((days % 365) / 30);
days = parseInt(((days % 365) % 30));

console.log(years + ' ano(s)');
console.log(months + ' mes(es)');
console.log(days + ' dia(s)');