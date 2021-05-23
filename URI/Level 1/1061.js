let input = require("fs").readFileSync("stdin", "utf-8");

let [dayStart = 0, hourStart = 0, dayEnd = 0, hourEnd = 0] = input.split('\n');

dayStart = parseInt(dayStart.replace('Dia ', '').replace(',',''));
[hourStart = 0, minStart = 0, secStart = 0] = hourStart.split(' : ')
    .map(value => parseInt(value));

dayEnd = parseInt(dayEnd.replace('Dia ', '').replace(',',''));
[hourEnd = 0, minEnd = 0, secEnd = 0] = hourEnd.split(' : ')
    .map(value => parseInt(value));

let secEvent = secStart > secEnd ? -1 : 0;
let minEvent = minStart > minEnd ? -1 : 0;
let hourEvent = hourStart > hourEnd ? -1 : 0;
let dayEvent = 0;

while (secStart !== secEnd) {
    secEvent++;
    secStart === 61 ? secStart = 1 : secStart++;
}

while (minStart !== minEnd) {
    minEvent++;
    minStart === 61 ? minStart = 1 : minStart++;
}

while (hourStart !== hourEnd) {
    hourEvent++;
    hourStart === 25 ? hourStart = 1 : hourStart++;
}

while (dayStart !== dayEnd) {
    dayStart++;
    dayEvent++;
}

console.log(dayEvent + ' dia(s)');
console.log(hourEvent + ' hora(s)');
console.log(minEvent + ' minuto(s)');
console.log(secEvent + ' segundo(s)');
