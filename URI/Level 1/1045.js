let input = require("fs").readFileSync("stdin", "utf-8");

let [ A, B, C ] = input.split(' ').map(value => parseFloat(value));

[ A, B, C] = [ A, B, C ].sort((a,b) => b-a);

if (A >= B + C) 
    console.log('NAO FORMA TRIANGULO');
else {
    if (A*A === B*B + C*C)
        console.log('TRIANGULO RETANGULO');

    if (A*A > B*B + C*C)
        console.log('TRIANGULO OBTUSANGULO');

    if (A*A < B*B + C*C)
        console.log('TRIANGULO ACUTANGULO');

    if (A === B && A === C)
        console.log('TRIANGULO EQUILATERO');

    if (A === B && A !== C || B === C  && B !== A || C === A && C !== B)
        console.log('TRIANGULO ISOSCELES');
}
