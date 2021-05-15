let input = require("fs").readFileSync("stdin", "utf-8");

const month = parseInt(input);
const monthsList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December' 
];

if (month <= monthsList.length && month >= 0) {
    console.log(monthsList[month - 1]);
}
