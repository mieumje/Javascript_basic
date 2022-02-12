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
function solution2(n) {
    let answer;
    function DFS(L) {
        if (L === 1) return 1;
        else return L * DFS(L - 1);
    }
    answer = DFS(n);
    return answer
}

console.log(solution(5));
console.log(solution2(5));