//let fs = require('fs'); 
//let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 

const input = [
    '3', '((\n))\n())(()'
  ];

const T = +input.shift() // 테스트 케이스 개수

function solution(T, arr) {
  const result = [];

  for (let i = 0; i < T; ++i) {
    const string = arr[i];
    let cnt = 0;

    for (let j = 0; j < string.length; ++j) {
      if (string[j] === '(') { cnt++;}  // 여는 괄호 -> cnt 증가

      else { // 닫는 괄호 -> 감소
        cnt--;

        if (cnt < 0) { // 닫는 괄호 개수 > 여는 괄호 개수
          result.push('NO');
          break;
        }
      }
    }

    if (cnt === 0) { result.push('YES');} // 모든 괄호 쌍 이룸 
    else if (cnt > 0) { result.push('NO');}
  }

  return result.join('\n'); // 문자열로 만듦
}

console.log(solution(T, input)); // 문자열 출력
