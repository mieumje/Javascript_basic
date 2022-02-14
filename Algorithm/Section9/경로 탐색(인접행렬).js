function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let check = Array.from({ length: n + 1 }, () => 0);
    for (let [a, b] of arr) {
        graph[a][b] = 1;
    }
    function DFS(v) {
        if (v === n) answer++;
        else {
            for (let i = 1; i <= n; i++) {
                if (check[i] === 0 && graph[v][i]) {
                    check[i] = 1;
                    DFS(i);
                    check[i] = 0;
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