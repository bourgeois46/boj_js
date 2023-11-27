let fs = require('fs'); 
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 

const N = Number(input.shift()); // 노드의 개수

function solution(arr, n){ // 인접 리스트와 노드의 개수를 받아 BFS를 수행
    let visited = new array(n).fill(false); // 노드 방문 여부 / 초기값
    let parent = new array(n).fill(''); // 부모 노드
    let queue = [0]; // BFS / 0번 노드 추가
    let temp = []; // 인접리스트 저장 / 각 노드의 연결된 노드들

    for(let i = 0; i < n; i++) // 빈 배열 n번 추가 / 각 노드의 연결된 노드를 저장할 공간 생성
        temp.push([]);
    
    arr.forEach((value)=>{ // 각 노드의 인접리스트 생성
        const [p,q] = value.split(' ').map(Number);
        // 노드에 연결된 노드들 추가 / 양방향으로 연결 / 무방향 그래프
        temp[p-1].push(q-1); // p번 노드의 인접리스트에 접근 / q-1 추가
        temp[q-1].push(p-1);
    });

    while(queue.length > 0){ // BFS
        const index = queue.shift(); // 큐에서 현재 노드 가져옴
        visited[index] = true; // 방문 기록

        temp[index].forEach((value)=>{ // 현재 노드에 연결된 모든 노드를 탐색
            if(!visited[value]){ // 방문하지 않은 노드라면  
                queue.push(value); // 해당 노드를 큐에 추가
                parent[value] = `${index+1}`; // 그 노드의 부모를 현재 노드로 표시
            }
        })
    }

    return parent.join('\n').trim(); // 각 노드 부모 배열 반환
}

console.log(solution(input,N));
