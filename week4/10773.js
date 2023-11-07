//let fs = require('fs'); 
//let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 

const input = [
    '10',
    '1',
    '3',
    '5',
    '4',
    '0',
    '0',
    '7',
    '0',
    '0',
    '6'
];

const n = Number(input[0]);
const stack =  [];

for (let i = 1; i <= n; i++) {
  const num = Number(input[i]);

  if (num === 0) { stack.pop();} // 0 -> 삭제 / 맨 끝에서 제거 / shift는 맨 앞에서 제거
  else {stack.push(num);} // 아니면 stack 배열에 추가
}

let result = 0; // stack 배열 원소 합
for (let i = 0; i < stack.length; i++) {
  result += stack[i];
}

console.log(result);
