function solution(arr) {
    let answer = [];
    let tmp = arr[0];
    for (let x of arr) {
        if (x === arr[0]) {
            answer.push(x);
        } else {
            if (tmp < x) {
                answer.push(x);
            }
        }
        tmp = x;
    }
    return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));