console.time('label');
function solution(k, arr) {
    let answer = 0;
    let length = arr.length;
    for (let i = 0; i <= length - k; i++) {
        let cnt = 0;
        let sum = 0;
        let idx = i;
        while (cnt < k) {
            cnt += 1;
            sum += arr[idx++];
            if (sum > answer) {
                answer = sum;
            }
        }
    }

    return answer
}
console.timeEnd('label');
console.time('label');
function solution2(k, arr) {
    let answer = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) sum += arr[i];
    answer = sum;
    for (let i = k; i < arr.length; i++) {
        sum += (arr[i] - arr[i - k])
        answer = Math.max(answer, sum);
    }
    return answer
}
console.timeEnd('label');
let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution2(3, a));
// solution  time = 0.071ms
// solution2 time = 0.071ms