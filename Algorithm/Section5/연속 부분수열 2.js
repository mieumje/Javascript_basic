console.time('label');
function solution(m, arr) {
    let answer = 0;
    let length = arr.length;
    let sum = left = 0;
    for (let right = 0; right < length; right++) {
        sum += arr[right];
        while (sum > m) {
            sum -= arr[left++];
        }
        answer += (right - left) + 1;
    }
    return answer;
}
console.timeEnd('label');
let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
// solution  time = 0.07ms