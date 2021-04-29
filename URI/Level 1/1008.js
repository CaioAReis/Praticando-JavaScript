// Padrão URI JavaScript: 
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split('\n');

const employeenNumber = parseInt(lines.shift());
const workedHours = parseInt(lines.shift());
const salaryByHours = parseFloat(lines.shift());

const salary = workedHours * salaryByHours;

console.log('NUMBER = ' + employeenNumber);
console.log('SALARY = U$ ' + salary.toFixed(2));