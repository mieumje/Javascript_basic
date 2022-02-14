function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array());    // 노드 갯수 만큼 빈 배열 생성
    let check = Array.from({ length: n + 1 }, () => 0);
    for (let [a, b] of arr) {   // 인접 리스트 생성, a번째 노드에서 갈 수 있는 b 노드 push
        graph[a].push(b);
    }
    let path = [];
    path.push(1);
    function DFS(v) {
        if (v === n) answer++, console.log(path)
        else {
            for (let i = 0; i < graph[v].length; i++) {
                let node = graph[v][i];
                if (check[node] === 0) {
                    check[node] = 1;
                    path.push(node);
                    DFS(node);
                    path.pop();
                    check[node] = 0
                }
            }
        }
    }
    check[1] = 1;   // 1번 노드부터 시작, 체크 배열 1번 true
    DFS(1);         // 1번 노드부터 시작
    return answer;
}

let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));