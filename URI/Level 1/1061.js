let input = require("fs").readFileSync("stdin", "utf-8");

let [dayStart = 0, hourStart = 0, dayEnd = 0, hourEnd = 0] = input.split('\n');

dayStart = parseInt(dayStart.replace('Dia ', '').replace(',',''));
[hourStart = 0, minStart = 0, secStart = 0] = hourStart.split(' : ')
    .map(value => parseInt(value));

dayEnd = parseInt(dayEnd.replace('Dia ', '').replace(',',''));
[hourEnd = 0, minEnd = 0, secEnd = 0] = hourEnd.split(' : ')
    .map(value => parseInt(value));

let secEvent = 0;
let minEvent = 0;
let hourEvent = 0;
let dayEvent = 0;

while (secStart !== secEnd) {
    if (secStart === 60)
        secStart = 0;
    secEvent++;
    secStart++;
}

while (minStart !== minEnd) {
    if (minStart === 60) 
        minStart = 0;
    minEvent++;
    minStart++;
}

while (hourStart !== hourEnd) {
    if (hourStart === 24)
        hourStart = 0;
    hourEvent++;
    hourStart++;
}

while (dayStart !== dayEnd) {
    dayStart++;
    dayEvent++;
}

console.log(dayEvent + ' dia(s)');
console.log(hourEvent + ' hora(s)');
console.log(minEvent + ' minuto(s)');
console.log(secEvent + ' segundo(s)');
