function solution(arr) {
    let answer = 0, cnt = 0;
    for (let x of arr) {
        if (x === 1) {
            cnt += 1;
        } else {
            cnt = 0;
        }
        answer += cnt;
    }
    return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));