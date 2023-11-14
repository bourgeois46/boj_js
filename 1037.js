//let fs = require('fs'); 
//let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 
 let input = [1, `3 4 2 12 6 8`]; // 약수 개수, 약수들

const numbers = input[1].split(' ').sort((a,b)=>a-b); // 배열, 오름차순 정렬
const max = Math.max(...numbers);
const min = Math.min(...numbers);
//let result = 0;

//(numbers.length>=2) ? (result =  maxnum*minnum) : (result = minnum*minnum); 
// 어차피 배열 길이 2이상, 1이면 max === min
console.log(max*min);
