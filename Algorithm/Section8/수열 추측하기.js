console.time('label');
function solution(n, f) {
    let answer = [];
    let flag = false;
    let combi = Array.from({ length: n }, () => 0);     // 파스칼 삼각형 combinations
    let check = Array.from({ length: n + 1 }, () => 0); // check 배열
    let tmp = Array.from({ length: n }, () => 0);       // 조합
    function combinations(n, r) {
        if (n === r || r === 0) return 1
        else if (r === 1) return n
        else return combinations(n - 1, r - 1) + combinations(n - 1, r)
    }
    for (let i = 0; i < n; i++) {
        combi[i] = combinations(n - 1, i);
    }
    function DFS(L, sum) {
        if (flag) return
        if (L === n && sum === f) {
            answer.push(tmp.slice());
            flag = true;
        }
        else {
            for (let i = 1; i <= n; i++) {
                if (check[i] === 0) {
                    check[i] = 1;
                    tmp[L] = i;
                    DFS(L + 1, sum + (tmp[L] * combi[L]));
                    check[i] = 0;
                }
            }
        }
    }

    DFS(0, 0) // Level, sum
    return answer;
}
console.log(solution(4, 16));
console.timeEnd('label');
// time -> 9.034ms