const input = require("fs").readFileSync("stdin", "utf-8");

let seconds = parseInt(input);

seconds = parseInt(time % 60);
const minuts = parseInt( (time / 60) % 60);
const hours = parseInt((time / 60) / 60 % 60 );

console.log(hours + ':' + minuts + ':' + seconds);
