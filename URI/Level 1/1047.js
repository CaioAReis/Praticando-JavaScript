let input = require("fs").readFileSync("stdin", "utf-8");

let [hourStart, minStart, hourEnd, minEnd] = input.split(' ')
    .map(value => parseInt(value));

if (!hourStart) hourStart = 0;
if (!minStart) minStart = 0;
if (!hourEnd) hourEnd = 0;
if (!minEnd) minEnd = 0;

let timeFinal = (hourEnd*60 + minEnd) - (hourStart*60 + minStart) ;

if (timeFinal <= 0) 
    timeFinal += 24*60;

let hourFinal = parseInt(timeFinal / 60);
let minFinal = timeFinal % 60;


if (hourStart === hourEnd && minStart === minEnd)
    console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
else
    console.log('O JOGO DUROU ' + hourFinal + 
        ' HORA(S) E ' + minFinal + ' MINUTO(S)');