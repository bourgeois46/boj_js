const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const k = Number(input.shift()); // 반복횟수
let arr1 = [];

for (let i = 0; i < k; i++) {
    arr1.push(input[i].split(" ").map((item) => Number(item)));
}

arr1.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
});

for (let i = 0; i < k; i++) {
    console.log(arr1[i].join(" "));
}
