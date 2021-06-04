let input = require("fs").readFileSync("stdin", "utf-8");

let [ X, Y ] = input.split('\n').map(value => parseInt(value));
let sum = 0;



if (X !== Y) {
    if (Y < X) {
        do {
            if (Math.abs(Y % 2) !== 0)
                sum += Y;
           
            Y++;
        } while (Y < X);
    } else {
        do {
            if (Math.abs(X % 2) !== 0)
                sum += X;
           
            X++;
        } while (X < Y);
    }
}
 
console.log(sum);
