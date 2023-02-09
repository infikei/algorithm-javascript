// Solve 2023-02-09

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = fs.readFileSync('input.txt').toString().split('\n');

const [a, b] = input[0].split(' ').map(Number);
console.log(a - b);
