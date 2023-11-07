//let fs = require('fs'); 
//let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 

const input = [
    '7',    
    '3',
  ];

let N = Number(input[0]);
let K = Number(input[1]);
let result =[]; // 순열 저장

const arr = []; // 1~N 숫자로 초기화된 배열
for (let i = 1; i <= N; i++) {
  arr.push(i);
}
/* 매핑 함수 이용 : const arr = Array.from({ length: n }, (v, i) => i + 1);*/

// K번째 사람 제거, 남은 사람 순서 계산
for (let i = 0; i < N; i++) {
    for (let j = 1; j <= K; j++) {
     if (j === K) result.push(arr.shift()); // K번째 사람 -> 제거 && 순열에 추가
     else arr.push(arr.shift());// K번째 사람 제외 -> 첫 번째 요소 빼서 다시 배열 끝에 추가
    }
}

console.log('<'+result.join(', ')+'>'
