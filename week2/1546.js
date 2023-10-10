const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const num = +input[0];
const score = input[1].split(' ').map(val=>+val);
const max = Math.max(...score);

const newScore = score.map(val => val/max*100);
const sumScore = newScore.reduce((acc,cur)=> {return acc+cur});

console.log(sumScore/num); 
