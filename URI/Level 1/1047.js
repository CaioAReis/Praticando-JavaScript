let input = require("fs").readFileSync("stdin", "utf-8");

let [horaInicial, minInicial, horaFinal, minFinal] = input.split(' ')
    .map(value => parseInt(value));

let hourStart = horaInicial + (minInicial * 60);
let hourEnd = horaFinal + (minFinal / 60);

console.log(hourStart / 60);

let countHour = 0;
let countMin = 0;

if (horaInicial && !minInicial && !horaFinal && !minFinal) {
    minFinal = horaInicial;
    horaInicial = 0;
    horaFinal = 0;
    minInicial = 0;
}


let counterHour = () => {
    while (horaInicial !== horaFinal) {
        horaInicial === 23 ? horaInicial = 0 : horaInicial++;
        countHour++;
    }
}

let counterMin = () => {
    while (minInicial !== minFinal) {
        if (minInicial === 59) {
            minInicial = 0;
            horaInicial++;
        } else 
            minInicial++;
        countMin++;
    }
}

if (horaInicial === horaFinal && minInicial === minFinal)
    console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
else if (horaInicial === horaFinal && minInicial !== minFinal) {
    counterMin();
    console.log('O JOGO DUROU 24 HORA(S) E ' + countMin + ' MINUTO(S)');
} else if (horaInicial !== horaFinal && minInicial === minFinal) {
    counterHour();
    console.log('O JOGO DUROU ' + countHour  + ' HORA(S) E 0 MINUTO(S)');
} else {
    counterMin();
    counterHour();
    console.log(
        'O JOGO DUROU '+ countHour + 
        ' HORA(S) E ' + countMin + ' MINUTO(S)'
    );
}