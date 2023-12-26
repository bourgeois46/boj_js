let fs = require('fs'); 
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]); // 순열 길이
let permutation = input[1].split(' ').map(Number); // 순열 입력

const result = solution(permutation);

if (result === -1) {
    console.log(-1); // 마지막에 오는 순열인 경우
} 
else {
    console.log(result.join(' ')); // 다음 순열 출력
}

function solution(arr) { // 오름차순이 끝나는 지점(i-1) // a[i-1] < a[i]를 만족하는 i
    let i = arr.length - 1;
    
    while (i > 0 && arr[i - 1] >= arr[i]) { // 오름차순 정렬x 부분 찾음
        i -= 1; // 뒤에서부터 탐색
    }
    
    if (i <= 0) { // 마지막 순열인 경우
        return -1;
    }
    
    let j = arr.length - 1; 

    while (arr[j] <= arr[i - 1]) { // i-1보다 큰 가장 작은 숫자 찾음
        j -= 1;
    }
    
    [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]]; // 값 교환
    
    j = arr.length - 1;

    while (i < j) { // 오름차순 정렬
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i += 1;
        j -= 1;
    }
    
    return arr;
}
