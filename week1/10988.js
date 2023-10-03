const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(s) {
    s = s.toLowerCase(); 
    const len = s.length;

    for (let i = 0; i < Math.floor(len / 2); i++) {
// Math.floor 내장 함수/ 주어진 숫자를 소수점 아래로 내림 3.5 -> 3
        if (s[i] !== s[len - i - 1]) {
            return false;
        }
    }
    return true;
}

rl.question('', (str) => {
    if (isPalindrome(str))
        console.log('1');
    else
        console.log('0');

    rl.close();
});
