//let fs = require('fs'); 
//let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 

const T = Number(inputs.shift()); // 테스트 케이스 개수

let ans = []; // 테스트 케이스의 결과 저장

function getGCD(a, b){ // 최대 공약수 구하는 함수 -> 유클리드 호제법
    while(a % b !== 0){
        let r = a % b;
        
        if(r !== 0){
            a = b;
            b = r;
        }
    }  
    return b;
}

for(let i = 0; i < iter; i++){
    let input = inputs[i].trim().split(" ").map((item) => Number(item)); // 배열로 변환
    let newIter = input.shift(); // 배열의 첫번째 요소를 newIter로 저장, 배열에서 제거
    
    input.sort((a ,b) => b - a); // 내림차순 정렬
    let sum = 0;

    for (let j = 0; j < newIter - 1; j++){ // 가능한 모든 쌍의 GCD를 계산
        let a = input[j];
      
        for(let k = j + 1; k < newIter; k++){
            let b = input[k];
            let GCD = getGCD(a, b);
            sum += GCD;
        }
    }   
    ans.push(sum); // 테스트 케이스의 결과 저장
}
console.log(ans.join("\n")); // 문자열로 출력
