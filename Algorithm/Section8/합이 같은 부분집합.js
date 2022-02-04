console.time('label');
function solution(arr) {
    let answer = "NO";
    let flag = 0;
    let n = arr.length;
    let totalSum = arr.reduce((a, b) => a + b, 0);

    function DFS(L, sum) {
        if (L === n || flag) return;

        if ((totalSum - sum) === sum) {
            answer = "YES";
            flag = 1;
        }
        else {
            DFS(L + 1, sum + arr[L]);
            DFS(L + 1, sum);
        }
    }
    DFS(0, 0);

    return answer;
}
console.timeEnd('label');
let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
// 0.073ms