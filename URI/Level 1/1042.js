let input = require("fs").readFileSync("stdin", "utf-8");

let values = input.split(' ').map(value => parseInt(value));

values.map(() => {
    if (values[0] < values[1] && values[0] < values[2]) {
        console.log(values[0]);
        values.shift();
    }

    if (values[1] < values[0] && values[1] < values[2]) {
        console.log(values[1]);
    }

    if (values[2] < values[0] && values[2] < values[1]) {
        console.log(values[2]);
        values.pop();
    }
});


console.log('\n' + values[0]);
console.log(values[1]);
console.log(values[2]);


// for (let i = 0; i < values.length; i++) {
    
//     for (let j = i + 1; j < values.length; j++) {
//         if (values[j] < values[i])
//             menor = values[j];
//             values[j] = values[i];
//             values[i] = menor;
//     }
    
// }

// values.sort();
