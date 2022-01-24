function solution(n, arr) {
    let answer, max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        let tmp = arr[i];
        while (tmp) {
            sum += tmp % 10;
            tmp = Math.floor(tmp / 10);
        }
        if (sum > max) {
            max = sum;
            answer = arr[i];
        } else if (sum === max) {
            if (answer < arr[i]) {
                answer = arr[i];
            }
        }
        console.log(answer)
    }
    return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));