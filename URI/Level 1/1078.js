let input = require("fs").readFileSync("stdin", "utf-8");

const value = parseInt(input);

let i = 1;
while (i <= 10) {
    console.log(i + " x " + value + " = " + value * i);
    i++;
}