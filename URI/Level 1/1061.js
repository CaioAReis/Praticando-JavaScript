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

do {
    secEvent++;
    secStart === 59 ? secStart = 0 : secStart++;
} while (secStart !== secEnd);

if (secEvent >= 60) {
    minEvent++;
    secEvent = 0;
}

do {
    minEvent++;
    minStart === 59 ? minStart = 0 : minStart++;
} while (minStart !== minEnd);

if (minEvent >= 60) {
    hourEvent++;
    minEvent = 0;
}

do {
    hourEvent++;
    hourStart === 23 ? hourStart = 0 : hourStart++;
} while (hourStart !== hourEnd);

if (hourEvent >= 24) {
    dayEvent++;
    hourEvent = 0;
}

while (dayStart !== dayEnd) {
    dayStart++;
    dayEvent++;
}

if (hourEvent > 0 && dayEvent > 0)
    dayEvent--;

// let timeFinal = 
// (((dayEnd*24)*60) + hourEnd*60 + minEnd + secEnd/60) - (((dayStart*24)*60) + hourStart*60 + minStart + secStart/60);

// if (timeFinal <= 0)
//     timeFinal += 24*60;

// console.log((timeFinal/60)/24);
// console.log((timeFinal/60)%24);
// let dayEvent = dayEnd - dayStart;
// let hourEvent = parseInt(((timeFinal/60)%24));
// let minEvent = parseInt(hourEvent / 60);
// let secEvent = parseInt(minEvent / 60);

// if (hourEvent >= 24) {
//     hourEvent = 0;
//     dayEvent++;
// }

console.log(dayEvent + ' dia(s)');
console.log(hourEvent + ' hora(s)');
console.log(minEvent + ' minuto(s)');
console.log(secEvent + ' segundo(s)');
