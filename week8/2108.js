let fs = require('fs'); 
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 
input.shift();
input = input.map((v) => +v).sort((a, b) => a - b); // 오름차순 정렬

console.log(Math.round(input.reduce((prev, cur) => prev + cur, 0) / input.length)); // 산술 평균 // 누적/배열의 개수
console.log(input[(input.length - 1) / 2]); // 중앙값

// 최빈값
let arr = {}; // 각 숫자의 빈도수 카운트
for (let i = 0; i < input.length; i++) {
  if (arr.hasOwnProperty(String(input[i]))) 
    arr[String(input[i])] += 1;
  else 
    arr[String(input[i])] = 1; // 처음 나온 숫자면 키로 추가 
}

arr = Object.entries(arr).sort(([a, b], [c, d]) => { // 객체를 배열로 변환, 빈도수 높은 순서로 정렬
  if (b === d) 
    return a - c;
  else 
    return d - b;  
});

if (arr.length === 1) // 중복된 숫자 x 
  console.log(arr[0][0]);
else if (arr[0][1] === arr[1][1]) // 두번째로 높은 숫자 출력
  console.log(arr[1][0]);
 else // 가장 많이 등장하는 숫자
  console.log(arr[0][0]);

console.log(Math.abs(Math.max(...input) - Math.min(...input))); // 범위
