const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = []; // 입력 저장 배열

rl.on('line', (line) => { // 이벤트 리스너 
// line 이벤트 : 사용자가 입력한 한줄의 문자열 받을 때 발
// line 매개변수에 사용자가 입력한 문자열 전달
    input.push(line); // 입력 처리하고 input 배열에 추가
})
    .on('close', () => {
// 사용자가 입력을 끝내고 인터페이스를 종료할 때 'close' 이벤트가 발생하고 
// 그때마다 등록한 콜백 함수가 실행
        const [, ...str] = input;

        let count = 0;

        str.forEach(value => { // 배열에 있는 각 입력 문자열을 처리
            let word = '';
            let flag = true; // 그룹 단어 판별

            for (let i = 0; i < value.length; i++) {
                if (word.indexOf(value[i]) === -1) 
// 현재 문자가 word 문자열에 없으면 추가
                    word += value[i];
                else {
// 현재 문자가 이미 word 문자열에 있을 때
                    if (word.indexOf(value[i]) !== word.length - 1) {
// 현재 문자가 word 문자열의 마지막 문자가 아니면 flag를 false로 설정하고 반복문을 종료
// 그룹단어x
                        flag = false;
                        break;
                    }
                }
            }
            if(flag) count++;
        });

        console.log(count);
        rl.close();

//'line' 이벤트는 사용자가 입력한 문자열을 받기 위해 사용되고, 
//'close' 이벤트는 입력이 종료되고 결과를 출력할 때 사용
    });
