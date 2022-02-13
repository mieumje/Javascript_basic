console.time('label');
function solution(n, r) {
    let answer = 0;
    function DFS(n, r) {
        if (n === r) return 1
        else if (r === 1) return n
        else return DFS(n - 1, r - 1) + DFS(n - 1, r)
    }
    answer = DFS(n, r);
    return answer;
}
// console.log(solution(5, 3));
console.log(solution(33, 19));
console.timeEnd('label');
// n = 33, r = 19 > time = 3.668s 첫번째 시도
// n = 33, r = 19 > time = 3.623s 두번째 시도