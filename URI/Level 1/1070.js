let input = require("fs").readFileSync("stdin", "utf-8");

let value = parseInt(input);
let qtd = 0;

while(qtd !== 6) {
    if (value % 2 !== 0) {
        qtd++;
        console.log(value);
    }
    value++;
}
