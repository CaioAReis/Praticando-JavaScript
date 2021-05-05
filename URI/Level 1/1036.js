let input = require("fs").readFileSync("stdin", "utf-8");

const [ A, B, C ] = input.split(' ').map(value => parseFloat(value));

const delta = (B ** 2) - (4 * A * C);

if ( delta > 0 && 2 * A > 0) {
    const r1 = (- B + Math.sqrt(delta, 2)) / (2 * A);
    const r2 = (- B - Math.sqrt(delta, 2)) / (2 * A);

    console.log('R1 = ' + r1.toFixed(5));
    console.log('R2 = ' + r2.toFixed(5));
} else 
    console.log('Impossivel calcular');