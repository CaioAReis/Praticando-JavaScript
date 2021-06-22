

const input = require("fs").readFileSync("stdin", "utf-8");

const values = input.split('\n');

let n = parseInt(values.shift());
let notes, total;

for (let i = 0; i < n; i++) {

	notes = values.shift();
	notes = notes.split(' ').map(value => parseFloat(value));

	total = (notes[0] * 2 + notes[1] * 3 + notes[2] * 5) / 10;

	console.log(total.toFixed(1));
}

