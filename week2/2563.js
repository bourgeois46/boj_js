const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solution(n, data) {
    let paper = new Array(100).fill().map(el => new Array(100).fill(false));
    let i, j, k;

    for (i = 0; i < n; i++) {
        const colorPaper = data[i];
        const x = colorPaper[0], y = colorPaper[1];

        for (j = 0; j < 10; j++) 
            for (k = 0; k < 10; k++) {
                paper[x + j][y + k] = true;
            }
        
    }

    const answer = paper.reduce((prev, curr) => {
        for (const el of curr) {
            if (el) 
                prev++;    
        }
        return prev;
    }, 0);

    console.log(answer);
}
