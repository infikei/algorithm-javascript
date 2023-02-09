// Solve 2023-02-09

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = fs.readFileSync('input.txt').toString().split('\n');
let output = '';

const testCaseNum = +input[0];
for (let t = 1; t <= testCaseNum; t++) {
    const [a, b] = input[t].split(' ').map(Number);
    output += (a + b).toString() + '\n';
}

console.log(output);
