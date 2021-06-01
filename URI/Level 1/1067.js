let input = require("fs").readFileSync("stdin", "utf-8");

const value = parseInt(input);

for(let i = 1; i <= value; i++) {
    if (i % 2 !== 0)
        console.log(i);
}
