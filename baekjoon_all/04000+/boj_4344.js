// Solve 2023-02-10

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = fs.readFileSync('input.txt').toString().split('\n');

const testCaseNum = +input[0];
for (let testCase = 1; testCase <= testCaseNum; testCase++) {
    const inputLine = input[testCase].split(' ').map(Number);

    const n = inputLine[0];
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += inputLine[i];
    }
    const avr = sum / n;

    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        if (inputLine[i] > avr) {
            cnt++;
        }
    }
    console.log(`${(cnt * 100 / n).toFixed(3)}%`);
}
