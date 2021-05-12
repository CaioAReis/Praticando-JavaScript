let input = require("fs").readFileSync("stdin", "utf-8");

let [inicio, fim] = input.split(' ').map(value => parseInt(value));
let counter = 0;

if (inicio === fim) 
    console.log('O JOGO DUROU 24 HORA(S)');
else {
    while(inicio !== fim) {
        inicio === 23 ? inicio = 0 : inicio++;
        counter++;
    }
    console.log('O JOGO DUROU ' + counter + ' HORA(S)');
}
