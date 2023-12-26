let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).slice(1); // 배열만 추출

let solution = arr => {
  return arr.sort((a,b) => a-b).join("\n"); // 배열의 요소를 문자열로 만듦
}

console.log(solution(input));
