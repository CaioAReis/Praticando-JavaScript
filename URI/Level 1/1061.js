let input = require("fs").readFileSync("stdin", "utf-8");

let [dayStart = 0, hourStart = 0, dayEnd = 0, hourEnd = 0] = input.split('\n');

dayStart = parseInt(dayStart.replace('Dia ', '').replace(',',''));
[hourStart = 0, minStart = 0, secStart = 0] = hourStart.split(' : ')
    .map(value => parseInt(value));

dayEnd = parseInt(dayEnd.replace('Dia ', '').replace(',',''));
[hourEnd = 0, minEnd = 0, secEnd = 0] = hourEnd.split(' : ')
    .map(value => parseInt(value));

let timeFinal = 
(((dayEnd*24)*60) + hourEnd*60 + minEnd + secEnd/60) - (((dayStart*24)*60) + hourStart*60 + minStart + secStart/60);

if (timeFinal <= 0)
    timeFinal += 24*60;

console.log((timeFinal/60)/24);
console.log((timeFinal/60)%24);
let dayEvent = parseInt((timeFinal/60)/24);
let hourEvent = parseInt(((timeFinal/60)%24));
let minEvent = parseInt(((timeFinal/60)%24) * 60);
let secEvent = parseInt(minEvent / 60);

// if (hourEvent >= 24) hourEvent = 0;
// else dayEvent--;

console.log(dayEvent + ' dia(s)');
console.log(hourEvent + ' hora(s)');
console.log(minEvent + ' minuto(s)');
console.log(secEvent + ' segundo(s)');
