function solution(m, arr) {
    let result = [];
    let n = arr.length;
    let tmp = Array.from({ length: m }, () => 0);
    let check = Array.from({ length: n }, () => 0);

    function DFS(L) {
        if (L === m) result.push(tmp.slice());
        else {
            for (let i = 0; i < n; i++) {
                if (check[i] === 0) {
                    check[i] = 1;
                    tmp[L] = arr[i];
                    DFS(L + 1);
                    check[i] = 0;
                }
                console.log(tmp, check)
            }
        }
    }
    DFS(0);

    let answer = [result, result.length];
    return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
