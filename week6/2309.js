//let fs = require('fs'); 
//let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 
let input = [
    '20',
    '7',
    '23',
    '19',
    '10',
    '15',
    '25',
    '8',
    '13'
];

function findSevenDwarfs(heights) { // 합이 100이 되는 7명 찾는 함수
    const total = heights.reduce((acc, curr) => acc + curr, 0); // 9명의 키 합
    // reduce 메서드 이용: 요소들을 하나의 값으로 줄여나감

    // 9명 난쟁이들의 가능한 조합 확인
    for (let i = 0; i < heights.length; i++) { // i, j 번째 난쟁이 키를 합쳐 total에서 뺀 값이 100인 경우 찾기
        for (let j = i + 1; j < heights.length; j++) { // 현재 i와 다른 난쟁이들의 키를 합쳐 100이 되는 조합 찾기
            // 중첩 for문 -> 위 조합에 포함되지 않는 난쟁이들 키 필터링됨
            if (total - (heights[i] + heights[j]) === 100) {
                return heights.filter((dwarf, index) => index !== i && index !== j);
            }
        }
    }
}

const sevenDwarfs = findSevenDwarfs(input); // 입력값 넣기
sevenDwarfs.forEach(height => console.log(height)); // 7명 한줄씩 출력
