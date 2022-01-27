console.time('label');
function solution(m, arr) {
    let sum = 0;
    let cnt = 0;
    let length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        sum += arr[i];
        for (let j = i + 1; j < length; j++) {
            sum += arr[j];
            if (sum < m) continue;
            else if (sum === m) {
                sum = 0;
                cnt++;
                break;
            } else if (sum > m) {
                sum = 0;
                break;
            }
        }
    }
    return cnt;
}
console.timeEnd('label');
console.time('label');
function solution2(m, arr) {
    let answer = 0, lt = 0, sum = 0;
    for (let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];
        if (sum === m) answer++;
        while (sum >= m) {
            sum -= arr[lt++];
            if (sum === m) answer++;
        }
    }
    return answer;
}
console.timeEnd('label');

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
console.log(solution2(6, a));
// solution time = 0.08ms
// solution2 time = 0.075ms