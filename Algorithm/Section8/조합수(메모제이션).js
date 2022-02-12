console.time('label');
function solution(n, r) {
    let answer = 0;
    function DFS(n, r) {
        if (n === r) return answer += 1;
        if (r === 1) return answer += n;
        else return DFS(n - 1, r - 1), DFS(n - 1, r)
    }
    DFS(n, r);
    return answer;
}
// console.log(solution(5, 3));
console.log(solution(33, 19));
console.timeEnd('label');
// n = 33, r = 19 > time = 3.668s