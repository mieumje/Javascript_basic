function solution(target, arr) {
    let answer;
    arr.sort((a, b) => a - b);

    let start = 0;
    let end = arr.length - 1;

    while (end - start >= 0) {
        let mid = parseInt((start + end) / 2);
        if (target === arr[mid]) {
            answer = mid + 1;
            return answer
        } else if (target < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));