function solution(n) {
    let answer = 1;
    function DFS(L) {
        if (L > n) return
        else {
            answer *= L;
            DFS(L + 1);
        }
    }
    DFS(1);
    return answer;
}

console.log(solution(5));