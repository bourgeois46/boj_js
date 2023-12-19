let fs = require('fs'); 
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 
let [N, M] = input[0].split(' ').map(Number); 

const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(String(i));
}

function seq(count, used, val) { // 재귀적으로 순열 생성
  if (count === M) {
    console.log(val);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!(used & (1 << i))) {
        seq(count + 1, used | (1 << i), val + arr[i] + ' ');
    }
  }
}

seq(0, 0, '');
