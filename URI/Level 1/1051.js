let input = require("fs").readFileSync("stdin", "utf-8");

const salary = parseFloat(input);
let rest;
let tax;

if (salary >= 0 && salary <= 2000) 
    console.log('Isento');
else if (salary > 2000 && salary <= 3000) {
    rest = salary - 2000;
    tax = rest * 0.08;
    console.log('R$ ' + tax.toFixed(2));
} else if (salary > 3000 && salary <= 4500) {
    rest = salary - 3000;
    tax = (rest * 0.18) + (1000 * 0.08);
    console.log('R$ ' + tax.toFixed(2));
} else {
    rest = salary - 4500;
    tax = (rest * 0.28) + (1000 * 0.08) + (1500 * 0.18);
    console.log('R$ ' + tax.toFixed(2));
}