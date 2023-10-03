const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let gpaSum = 0.0;
let totalSum = 0.0;

function calculateGPA(grade) {
    if (grade[0] === 'P' || grade[0] === 'F') {
        return 0.0;
    }

    let gpaTmp;

    switch (grade[0]) {
        case 'A':
            gpaTmp = 4.0;
            break;
        case 'B':
            gpaTmp = 3.0;
            break;
        case 'C':
            gpaTmp = 2.0;
            break;
        default:
            gpaTmp = 1.0;
    }

    if (grade[1] === '+') {
        gpaTmp += 0.5;
    }

    return gpaTmp;
}

let count = 0;
rl.on('line', (line) => { // 이벤트 리스너
// 사용자가 입력한 한 줄의 문자열을 받을 때마다 발생
    if (count < 20) {
        const parts = line.split(' '); // 공백 기준으로 분리해서 저
        if (parts.length === 3) { // 과목, gpa, 학점이 모두 입력되어야 
            const subject = parts[0];
            const gpa = parseFloat(parts[1]);
            const grade = parts[2];

            gpaSum += gpa;
            totalSum += gpa * calculateGPA(grade);

            count++;
        }
    } else {
        const result = totalSum / gpaSum;
        console.log(result.toFixed(1)); // 소수점 첫 번째 자리까지 반올림하여 출력
        rl.close();
    }
});
