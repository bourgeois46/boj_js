const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const arr_length = input.map(el => el.length);
const max = Math.max(...arr_length);
let rslt = '';
let i, j;

for (i = 0; i < max; i++) 
	for (j = 0; j < input.length; j++) {
		if (input[j][i] === undefined) 
      continue;
		else 
      rslt += input[j][i];
	}


console.log(rslt);
