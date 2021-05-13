let input = require("fs").readFileSync("stdin", "utf-8");

let salary = parseFloat(input);
let readjustment = 0;
let percent = 0;

if (salary >= 0 && salary <= 400) {
    percent = 15;
    readjustment = (salary * (percent/100));
    salary += readjustment;
} else if (400 < salary && salary <= 800) {
    percent = 12;
    readjustment = (salary * (percent/100));
    salary += readjustment;
} else if (800 < salary && salary <= 1200) {
    percent = 10;
    readjustment = (salary * (percent/100));
    salary += readjustment;
} else if (1200 < salary && salary <= 2000) {
    percent = 7;
    readjustment = (salary * (percent/100));
    salary += readjustment;
} else if (salary > 2000) {
    percent = 4;
    readjustment = (salary * (percent/100));
    salary += readjustment;
}

console.log('Novo salario: ' + salary.toFixed(2));
console.log('Reajuste ganho: ' + readjustment.toFixed(2));
console.log('Em percentual: '+ percent + ' %');