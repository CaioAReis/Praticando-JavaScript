let input = require("fs").readFileSync("stdin", "utf-8");

let [ X, Y ] = input.split('\n').map(value => parseInt(value));
let sum = 0;
let xNegative = false, yNegative = false;

if (X < 0) xNegative = true;
if (Y < 0) yNegative = true;

if (X !== Y) {
    X = Math.abs(X);
    Y = Math.abs(Y);

    if (Y < X) {
        do {
            if (Math.abs(Y % 2) !== 0)
                sum += Y;
           
            Y++;
        } while (Y < X);

        if (xNegative) console.log(-sum);
        else console.log(sum);
    } else {
        do {
            if (Math.abs(X % 2) !== 0)
                sum += X;
           
            X++;
        } while (X < Y);

        if (yNegative) console.log(-sum);
        else console.log(sum);
    }
} else 
    console.log(sum);
