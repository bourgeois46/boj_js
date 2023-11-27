let fs = require('fs'); 
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 
input[0] = input[0].split(" ");

const card = input[1].split(" ").map((element) => Number(element)); // 두 번째 줄을 공백으로 구분하여 숫자로 변환
const N = Number(input[0][0]); //총 카드의 개수
const M = Number(input[0][1]);  // 합은 M을 넘지 않으면서 M과 최대한 가깝게

let answer = 0, sum = 0, gap = 0; // 결과값, 합, 목표값과 차이

// 반복문 -> 모든 카드 조합
for(let i = 0; i < N; i++){ //  첫 번째 카드를 선택
   for(let j = i+1; j < N; j++){ // 두 번째
      for(let k = j+1; k < N; k++){ // 세 번째
         sum = cards[i] + cards[j] + cards[k];
         gap = M - sum;

         if(gap >= 0 && answer <= sum){ // 현재까지의 answer보다 크면 업데이트
            answer = sum;
         }
      }
   }
}
console.log(answer);
