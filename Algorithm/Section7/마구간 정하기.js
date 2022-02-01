console.time('label');
function solution(c, stable) {
    let answer;
    stable.sort((a, b) => a - b);

    let start = 1;
    let end = stable[stable.length - 1];

    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        let ep = stable[0];
        let cnt = 1;
        for (let i = 1; i < stable.length; i++) {
            let tmp = stable[i];
            if (tmp - ep >= mid) {
                ep = tmp;
                cnt++;
            }
        }
        if (cnt < c) end = mid - 1;
        else answer = mid, start = mid + 1;
    }
    return answer;
}
console.timeEnd('label');

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
