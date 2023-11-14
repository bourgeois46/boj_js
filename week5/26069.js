//let fs = require('fs'); 
//let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 

let input =[12,
  `bnb2011 chansol`,
  `chansol chogahui05`,
  `chogahui05 jthis`,
  `jthis ChongChong`,
  `jthis jyheo98`,
  `jyheo98 lms0806`,
  `lms0806 pichulia`,
  `pichulia pjshwa`,
  `pjshwa r4pidstart`,
  `r4pidstart swoon`,
  `swoon tony9402`,
  `tony9402 bnb2011`,
]

let n = parseInt(input[0]);
let arr = [];

for(let i=0; i<n; i++) {
  let person = input[i].split(' ');
  
  if(person[0]==="ChongChong") { // 첫 번째 사람이 총총이면 추가
    arr.push("ChongChong");
    arr.push(person[1]); // 총총이와 대화 같이한 사람
  } 
  else if (person[1]==="ChongChong") { // 두 번째
    arr.push("ChongChong");
    arr.push(person[0]);
  }

  if (arr.includes(person[0])) {
    arr.push(person[1]);
   }
  else if (arr.includes(person[1])) {
    arr.push(person[0]);
  }
} 

let answer = new Set(arr);
console.log(answer.size);
