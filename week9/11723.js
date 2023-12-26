let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const M = Number(input[0]); // 연산 수 
let s = new Set(); // 집합 

for (let i = 1; i <= M; i++) {
  const [command, value] = input[i].split(' ');

  switch (command) {
    case 'add':
      s.add(Number(value));
      break;

    case 'remove':
      s.delete(Number(value));
      break;

    case 'check':
      console.log(s.has(Number(value)) ? 1 : 0); // 출력
      break;

    case 'toggle':
      if (s.has(Number(value))) {
        s.delete(Number(value));
      } 
      else {
        s.add(Number(value));
      }
      break;

    case 'all':
      s = new Set(Array.from({ length: 20 }, (_, idx) => idx + 1));
      break;

    case 'empty':
      s = new Set();
      break;

    default:
      break;
  }
}
