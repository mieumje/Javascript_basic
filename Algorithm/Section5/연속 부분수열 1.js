console.time('label');
function solution(m, arr) {
    let answer = 0;
    let sum = left = right = 0;
    for (right; right < arr.length; right++) {
        sum += arr[right];
        if (sum === m) answer += 1;
        while (sum >= m) {
            sum -= arr[left++];
            if (sum === m) answer += 1;
        }

    }
    return answer;
}
console.timeEnd('label');

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
