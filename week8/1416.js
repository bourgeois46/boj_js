let fs = require('fs'); 
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 
let [e, s, m] = input.map(Number);
let year = 1; // 우리가 알고 있는 연도

while (1) {
  if ((year - e) % 15 === 0 && (year - s) % 28 === 0 && (year - m) % 19 === 0) { // 각 주기로 나눈 나머지가 0인지 체크
    console.log(year);
    break;
  }
  year++;
}
