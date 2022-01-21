function solution(arr) {
    let answer, min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    answer = min
    return answer;

}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
let brr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(brr));