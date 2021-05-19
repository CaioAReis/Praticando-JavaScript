let input = require("fs").readFileSync("stdin", "utf-8");

let [dayStart, hourStart, dayEnd, hourEnd] = input.split('\n');

dayStart = parseInt(dayStart.replace('Dia ', '').replace(',','.'));
[hourStart, minStart, secStart] = hourStart.split(' : ')
    .map(value => parseInt(value));

dayEnd = parseInt(dayEnd.replace('Dia ', '').replace(',','.'));
[hourEnd, minEnd, secEnd] = hourEnd.split(' : ')
    .map(value => parseInt(value));

let timeFinal = (hourEnd*60 + minEnd + secEnd/60) - (hourStart*60 + minStart + secStart/60);

if (timeFinal <= 0)
    timeFinal += 24*60;

let hourEvent = parseInt(timeFinal / 60);
let minEvent = parseInt(timeFinal % 60);
let secEvent = parseInt(minEvent / 60);
let dayEvent = dayEnd - dayStart;

if (hourEvent >= 24) {
    dayEvent++;
    hourEvent = 0;
} else 
    dayEvent--;

console.log(dayEvent + ' dia(s)');
console.log(hourEvent + ' hora(s)');
console.log(minEvent + ' minuto(s)');
console.log(secEvent + ' segundo(s)');
