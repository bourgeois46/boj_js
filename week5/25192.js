let input = [];

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (line) => {
  input.push(line);
});

readline.on("close", () => {
  solution(input);
  process.exit();
});

const solution = (a) => { // set.size 개수 더해주기
  a.shift(); // 첫 번째 요소 제거
  let count = 0;
  let set = new Set(); // 중복 허용x 집합 -> 중복 제거

  for (let i = 0; i < a.length; i++) { // 입력 배열 순회
    if (a[i] === "ENTER") {
      cnt += set.size; 
      set.clear(); // 초기화
      continue; // 다음 반복
    }
    set.add(a[i]);

    if (i === a.length - 1) { // 마지막 입력 처리
      count += set.size;
    }
  }
  console.log(count);
};
