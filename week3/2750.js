const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((item) => Number(item));

input.sort((a, b) => a - b); // 오름차순 정렬

for (let i = 0; i < input.length; i++) {  // 출력
  console.log(input[i]);
}
