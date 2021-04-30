const input = require("fs").readFileSync("stdin", "utf-8");

const [ A, B, C ] = input.split(' ').map(value => parseFloat(value));
const PI = 3.14159;

const areaTriangulo = (A * C) / 2;
const areaCirculo = PI * Math.pow(C, 2);
const areaTrapezio = (A + B) * C / 2;
const areaQuadrado = B * B;
const areaRetangulo = A * B;

console.log('TRIANGULO: ' + areaTriangulo.toFixed(3));
console.log('CIRCULO: ' + areaCirculo.toFixed(3));
console.log('TRAPEZIO: ' + areaTrapezio.toFixed(3));
console.log('QUADRADO: ' + areaQuadrado.toFixed(3));
console.log('RETANGULO: ' + areaRetangulo.toFixed(3));
