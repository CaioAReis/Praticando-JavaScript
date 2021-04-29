const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split('\n');

const sallerName = lines.shift();
const salary = parseFloat(lines.shift());
const salesTotal = parseFloat(lines.shift());

const commission = salesTotal * 0.15;
const salaryTotal = salary + commission;

console.log('TOTAL = R$ ' + salaryTotal.toFixed(2));