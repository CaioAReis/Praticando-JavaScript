const input = require("fs").readFileSync("stdin", "utf-8");

const value = parseInt(input);

for (let i = 1; i <= 10000; i++) {
    if (i % value === 2) console.log(i);
}
