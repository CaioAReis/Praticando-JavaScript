let input = require("fs").readFileSync("stdin", "utf-8");

let [A, B, C] = input.split(' ').map(value => parseInt(value));
let menor;
 
if (!menor) {
    menor = Math.min(A, B, C);
    console.log(menor);
} 

if (menor === A) {
    if (B < C) {
        console.log(B);
        console.log(C);
    } else {
        console.log(C);
        console.log(B);
    }
} else if (menor === B) {
    if (A < C) {
        console.log(A);
        console.log(C);
    } else {
        console.log(C);
        console.log(A);
    }
} else if (menor === C) {
    if (A < B) {
        console.log(A);
        console.log(B);
    } else {
        console.log(B);
        console.log(A);
    }
}

console.log('\n' + A);
console.log(B);
console.log(C);
